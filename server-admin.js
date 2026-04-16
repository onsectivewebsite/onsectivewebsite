import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();

// ─── Configuration ───────────────────────────────────────────────────────────

const JWT_SECRET = process.env.JWT_SECRET || 'onsective-admin-secret-2026';
const DB_PATH = path.join(__dirname, 'data', 'admin-db.json');

const DEFAULT_DB = {
  users: [],
  blogs: [],
  analytics: [],
  sessions: [],
  twoFactorCodes: [],
  resetTokens: [],
};

// ─── SMTP Transporter ────────────────────────────────────────────────────────

const adminTransporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'info@onsective.com',
    pass: process.env.EMAIL_PASS || 'Ons3ctiv3.',
  },
  connectionTimeout: 10000,
});

// ─── Database Helpers ────────────────────────────────────────────────────────

function readDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_DB, null, 2), 'utf-8');
      return structuredClone(DEFAULT_DB);
    }
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return structuredClone(DEFAULT_DB);
  }
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// ─── Seed Default Superuser ──────────────────────────────────────────────────

function seedDefaultUser() {
  const db = readDB();
  if (db.users.length === 0) {
    const hashedPassword = bcrypt.hashSync('Onsective2026!', 10);
    db.users.push({
      id: uuidv4(),
      username: 'admin',
      password: hashedPassword,
      role: 'superuser',
      name: 'System Administrator',
      email: 'admin@onsective.com',
      createdAt: new Date().toISOString(),
    });
    writeDB(db);
    console.log('[Admin] Default superuser created.');
  }
}

seedDefaultUser();

// ─── Slug Helper ─────────────────────────────────────────────────────────────

function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// ─── Auth Middleware ─────────────────────────────────────────────────────────

function authenticateAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authentication required.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const db = readDB();
    const session = db.sessions.find(
      (s) => s.token === token && s.userId === decoded.userId
    );
    if (!session) {
      return res.status(401).json({ message: 'Session expired or invalid.' });
    }
    const user = db.users.find((u) => u.id === decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }
    req.adminUser = { id: user.id, username: user.username, role: user.role, name: user.name, email: user.email };
    req.sessionToken = token;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
}

function requireSuperuser(req, res, next) {
  if (req.adminUser?.role !== 'superuser') {
    return res.status(403).json({ message: 'Superuser access required.' });
  }
  next();
}

// ─── Auth Routes ─────────────────────────────────────────────────────────────

// POST /api/admin/login
router.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const db = readDB();
    const user = db.users.find((u) => u.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Generate 6-digit 2FA code
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const tempToken = uuidv4();

    // Clean up expired 2FA codes for this user
    db.twoFactorCodes = db.twoFactorCodes.filter(
      (c) => c.userId !== user.id && new Date(c.expiresAt) > new Date()
    );

    db.twoFactorCodes.push({
      userId: user.id,
      code,
      tempToken,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 min
    });

    writeDB(db);

    // Send 2FA code via email
    await adminTransporter.sendMail({
      from: `"Onsective Admin" <${process.env.EMAIL_USER || 'info@onsective.com'}>`,
      to: user.email,
      subject: 'Your Onsective Admin Login Code',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 500px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0;">
          <h2 style="color: #020617; text-align: center; letter-spacing: 0.1em;">ONSECTIVE ADMIN</h2>
          <p style="color: #334155; font-size: 15px;">Your two-factor authentication code is:</p>
          <div style="background: #f8fafc; border: 2px solid #C5A059; padding: 20px; text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 0.3em; color: #020617;">${code}</span>
          </div>
          <p style="color: #64748b; font-size: 13px;">This code expires in 10 minutes. If you did not request this, ignore this email.</p>
        </div>
      `,
    });

    return res.status(200).json({
      message: 'Verification code sent to your email.',
      tempToken,
    });
  } catch (error) {
    console.error('[Admin Login Error]', error);
    return res.status(500).json({ message: 'Login failed. Please try again.' });
  }
});

// POST /api/admin/verify-2fa
router.post('/api/admin/verify-2fa', (req, res) => {
  try {
    const { tempToken, code } = req.body;
    if (!tempToken || !code) {
      return res.status(400).json({ message: 'Temp token and code are required.' });
    }

    const db = readDB();
    const entry = db.twoFactorCodes.find(
      (c) => c.tempToken === tempToken && c.code === code
    );

    if (!entry) {
      return res.status(401).json({ message: 'Invalid verification code.' });
    }

    if (new Date(entry.expiresAt) < new Date()) {
      db.twoFactorCodes = db.twoFactorCodes.filter((c) => c.tempToken !== tempToken);
      writeDB(db);
      return res.status(401).json({ message: 'Verification code has expired.' });
    }

    const user = db.users.find((u) => u.id === entry.userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found.' });
    }

    // Issue JWT
    const sessionToken = jwt.sign(
      { userId: user.id, role: user.role },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Store session
    db.sessions.push({
      token: sessionToken,
      userId: user.id,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    });

    // Remove used 2FA code
    db.twoFactorCodes = db.twoFactorCodes.filter((c) => c.tempToken !== tempToken);
    writeDB(db);

    return res.status(200).json({
      message: 'Authentication successful.',
      token: sessionToken,
      user: {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('[Admin 2FA Error]', error);
    return res.status(500).json({ message: 'Verification failed.' });
  }
});

// POST /api/admin/forgot-password
router.post('/api/admin/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required.' });
    }

    const db = readDB();
    const user = db.users.find((u) => u.email === email);

    // Always return success to avoid user enumeration
    if (!user) {
      return res.status(200).json({ message: 'If the email exists, a reset link has been sent.' });
    }

    const resetToken = uuidv4();

    // Remove old tokens for this user
    db.resetTokens = db.resetTokens.filter(
      (t) => t.userId !== user.id && new Date(t.expiresAt) > new Date()
    );

    db.resetTokens.push({
      userId: user.id,
      token: resetToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(), // 1 hour
    });

    writeDB(db);

    const resetLink = `${req.protocol}://${req.get('host')}/admin/reset-password?token=${resetToken}`;

    await adminTransporter.sendMail({
      from: `"Onsective Admin" <${process.env.EMAIL_USER || 'info@onsective.com'}>`,
      to: user.email,
      subject: 'Password Reset - Onsective Admin',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 30px; max-width: 500px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0;">
          <h2 style="color: #020617; text-align: center; letter-spacing: 0.1em;">PASSWORD RESET</h2>
          <p style="color: #334155; font-size: 15px;">Click the link below to reset your password:</p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="${resetLink}" style="background: #020617; color: #C5A059; padding: 12px 30px; text-decoration: none; font-weight: bold; letter-spacing: 0.05em;">RESET PASSWORD</a>
          </div>
          <p style="color: #64748b; font-size: 13px;">This link expires in 1 hour. If you did not request this, ignore this email.</p>
        </div>
      `,
    });

    return res.status(200).json({ message: 'If the email exists, a reset link has been sent.' });
  } catch (error) {
    console.error('[Forgot Password Error]', error);
    return res.status(500).json({ message: 'Failed to process request.' });
  }
});

// POST /api/admin/reset-password
router.post('/api/admin/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ message: 'Token and new password are required.' });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters.' });
    }

    const db = readDB();
    const entry = db.resetTokens.find((t) => t.token === token);

    if (!entry) {
      return res.status(400).json({ message: 'Invalid or expired reset token.' });
    }

    if (new Date(entry.expiresAt) < new Date()) {
      db.resetTokens = db.resetTokens.filter((t) => t.token !== token);
      writeDB(db);
      return res.status(400).json({ message: 'Reset token has expired.' });
    }

    const user = db.users.find((u) => u.id === entry.userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found.' });
    }

    user.password = await bcrypt.hash(newPassword, 10);

    // Remove used reset token
    db.resetTokens = db.resetTokens.filter((t) => t.token !== token);

    // Invalidate all existing sessions for this user
    db.sessions = db.sessions.filter((s) => s.userId !== user.id);

    writeDB(db);

    return res.status(200).json({ message: 'Password has been reset successfully.' });
  } catch (error) {
    console.error('[Reset Password Error]', error);
    return res.status(500).json({ message: 'Failed to reset password.' });
  }
});

// POST /api/admin/logout
router.post('/api/admin/logout', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    db.sessions = db.sessions.filter((s) => s.token !== req.sessionToken);
    writeDB(db);
    return res.status(200).json({ message: 'Logged out successfully.' });
  } catch (error) {
    console.error('[Logout Error]', error);
    return res.status(500).json({ message: 'Logout failed.' });
  }
});

// ─── Blog CRUD Routes ───────────────────────────────────────────────────────

// GET /api/admin/blogs
router.get('/api/admin/blogs', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(req.query.limit) || 10));
    const offset = (page - 1) * limit;

    const sorted = [...db.blogs].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const paginated = sorted.slice(offset, offset + limit);

    return res.status(200).json({
      blogs: paginated,
      total: db.blogs.length,
      page,
      limit,
      totalPages: Math.ceil(db.blogs.length / limit),
    });
  } catch (error) {
    console.error('[Blogs List Error]', error);
    return res.status(500).json({ message: 'Failed to fetch blogs.' });
  }
});

// GET /api/admin/blogs/:id
router.get('/api/admin/blogs/:id', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    const blog = db.blogs.find((b) => b.id === req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }
    return res.status(200).json(blog);
  } catch (error) {
    console.error('[Blog Detail Error]', error);
    return res.status(500).json({ message: 'Failed to fetch blog.' });
  }
});

// POST /api/admin/blogs
router.post('/api/admin/blogs', authenticateAdmin, (req, res) => {
  try {
    const {
      title, slug, category, excerpt, content, image,
      seoTitle, seoDescription, seoKeywords,
      status, author, publishedAt,
    } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required.' });
    }

    const db = readDB();
    const finalSlug = slug ? slug.trim() : generateSlug(title);

    // Check slug uniqueness
    if (db.blogs.some((b) => b.slug === finalSlug)) {
      return res.status(400).json({ message: 'A blog with this slug already exists.' });
    }

    const blog = {
      id: uuidv4(),
      title: title.trim(),
      slug: finalSlug,
      category: category || '',
      excerpt: excerpt || '',
      content: content || '',
      image: image || '',
      seoTitle: seoTitle || '',
      seoDescription: seoDescription || '',
      seoKeywords: seoKeywords || '',
      status: status || 'draft',
      author: author || req.adminUser.name,
      publishedAt: publishedAt || (status === 'published' ? new Date().toISOString() : null),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    db.blogs.push(blog);
    writeDB(db);

    return res.status(201).json({ message: 'Blog created.', blog });
  } catch (error) {
    console.error('[Blog Create Error]', error);
    return res.status(500).json({ message: 'Failed to create blog.' });
  }
});

// PUT /api/admin/blogs/:id
router.put('/api/admin/blogs/:id', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    const index = db.blogs.findIndex((b) => b.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    const {
      title, slug, category, excerpt, content, image,
      seoTitle, seoDescription, seoKeywords,
      status, author, publishedAt,
    } = req.body;

    const existing = db.blogs[index];

    // Check slug uniqueness if changed
    const finalSlug = slug ? slug.trim() : (title ? generateSlug(title) : existing.slug);
    if (finalSlug !== existing.slug && db.blogs.some((b) => b.slug === finalSlug)) {
      return res.status(400).json({ message: 'A blog with this slug already exists.' });
    }

    db.blogs[index] = {
      ...existing,
      title: title !== undefined ? title.trim() : existing.title,
      slug: finalSlug,
      category: category !== undefined ? category : existing.category,
      excerpt: excerpt !== undefined ? excerpt : existing.excerpt,
      content: content !== undefined ? content : existing.content,
      image: image !== undefined ? image : existing.image,
      seoTitle: seoTitle !== undefined ? seoTitle : existing.seoTitle,
      seoDescription: seoDescription !== undefined ? seoDescription : existing.seoDescription,
      seoKeywords: seoKeywords !== undefined ? seoKeywords : existing.seoKeywords,
      status: status !== undefined ? status : existing.status,
      author: author !== undefined ? author : existing.author,
      publishedAt: publishedAt !== undefined ? publishedAt : existing.publishedAt,
      updatedAt: new Date().toISOString(),
    };

    // Auto-set publishedAt when status changes to published
    if (status === 'published' && !db.blogs[index].publishedAt) {
      db.blogs[index].publishedAt = new Date().toISOString();
    }

    writeDB(db);

    return res.status(200).json({ message: 'Blog updated.', blog: db.blogs[index] });
  } catch (error) {
    console.error('[Blog Update Error]', error);
    return res.status(500).json({ message: 'Failed to update blog.' });
  }
});

// DELETE /api/admin/blogs/:id
router.delete('/api/admin/blogs/:id', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    const index = db.blogs.findIndex((b) => b.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    db.blogs.splice(index, 1);
    writeDB(db);

    return res.status(200).json({ message: 'Blog deleted.' });
  } catch (error) {
    console.error('[Blog Delete Error]', error);
    return res.status(500).json({ message: 'Failed to delete blog.' });
  }
});

// ─── Analytics Routes ────────────────────────────────────────────────────────

// POST /api/track (PUBLIC - no auth)
router.post('/api/track', (req, res) => {
  try {
    const {
      page, referrer, sessionId,
      screenWidth, screenHeight,
    } = req.body;

    const db = readDB();

    const entry = {
      id: uuidv4(),
      page: page || '/',
      referrer: referrer || '',
      userAgent: req.headers['user-agent'] || '',
      ip: req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.ip || '',
      timestamp: new Date().toISOString(),
      sessionId: sessionId || uuidv4(),
      screenWidth: screenWidth || null,
      screenHeight: screenHeight || null,
    };

    db.analytics.push(entry);
    writeDB(db);

    return res.status(200).json({ message: 'Tracked.', sessionId: entry.sessionId });
  } catch (error) {
    console.error('[Track Error]', error);
    return res.status(500).json({ message: 'Tracking failed.' });
  }
});

// GET /api/admin/analytics
router.get('/api/admin/analytics', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    const analytics = db.analytics;

    const totalVisits = analytics.length;

    // Unique visitors by IP
    const uniqueIPs = new Set(analytics.map((a) => a.ip));
    const uniqueVisitors = uniqueIPs.size;

    // Top pages
    const pageCounts = {};
    analytics.forEach((a) => {
      pageCounts[a.page] = (pageCounts[a.page] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([page, count]) => ({ page, count }));

    // Visits by day (last 30 days)
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const visitsByDay = {};
    for (let d = 0; d < 30; d++) {
      const date = new Date(now.getTime() - d * 24 * 60 * 60 * 1000);
      const key = date.toISOString().split('T')[0];
      visitsByDay[key] = 0;
    }
    analytics.forEach((a) => {
      const date = new Date(a.timestamp);
      if (date >= thirtyDaysAgo) {
        const key = date.toISOString().split('T')[0];
        if (visitsByDay[key] !== undefined) {
          visitsByDay[key]++;
        }
      }
    });
    const visitsByDayArray = Object.entries(visitsByDay)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([date, count]) => ({ date, count }));

    // Recent visitors (last 50)
    const recentVisitors = [...analytics]
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 50);

    // Top referrers
    const referrerCounts = {};
    analytics.forEach((a) => {
      if (a.referrer) {
        referrerCounts[a.referrer] = (referrerCounts[a.referrer] || 0) + 1;
      }
    });
    const topReferrers = Object.entries(referrerCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([referrer, count]) => ({ referrer, count }));

    // Browser breakdown (simple parse from user agent)
    const browserCounts = {};
    analytics.forEach((a) => {
      const ua = a.userAgent || '';
      let browser = 'Unknown';
      if (ua.includes('Firefox')) browser = 'Firefox';
      else if (ua.includes('Edg/')) browser = 'Edge';
      else if (ua.includes('Chrome') && !ua.includes('Edg/')) browser = 'Chrome';
      else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
      else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';
      browserCounts[browser] = (browserCounts[browser] || 0) + 1;
    });
    const browserBreakdown = Object.entries(browserCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([browser, count]) => ({ browser, count }));

    // Device breakdown
    const deviceCounts = { Desktop: 0, Mobile: 0, Tablet: 0 };
    analytics.forEach((a) => {
      const ua = a.userAgent || '';
      if (/tablet|ipad/i.test(ua)) deviceCounts.Tablet++;
      else if (/mobile|android|iphone/i.test(ua)) deviceCounts.Mobile++;
      else deviceCounts.Desktop++;
    });
    const deviceBreakdown = Object.entries(deviceCounts)
      .map(([device, count]) => ({ device, count }));

    return res.status(200).json({
      totalVisits,
      uniqueVisitors,
      topPages,
      visitsByDay: visitsByDayArray,
      recentVisitors,
      topReferrers,
      browserBreakdown,
      deviceBreakdown,
    });
  } catch (error) {
    console.error('[Analytics Error]', error);
    return res.status(500).json({ message: 'Failed to fetch analytics.' });
  }
});

// GET /api/admin/analytics/visitors
router.get('/api/admin/analytics/visitors', authenticateAdmin, (req, res) => {
  try {
    const db = readDB();
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.max(1, Math.min(100, parseInt(req.query.limit) || 50));
    const offset = (page - 1) * limit;

    // Group by IP
    const byIP = {};
    db.analytics.forEach((a) => {
      if (!byIP[a.ip]) {
        byIP[a.ip] = {
          ip: a.ip,
          visits: [],
          userAgent: a.userAgent,
          firstSeen: a.timestamp,
          lastSeen: a.timestamp,
        };
      }
      byIP[a.ip].visits.push({ page: a.page, timestamp: a.timestamp });
      if (a.timestamp < byIP[a.ip].firstSeen) byIP[a.ip].firstSeen = a.timestamp;
      if (a.timestamp > byIP[a.ip].lastSeen) byIP[a.ip].lastSeen = a.timestamp;
    });

    const visitors = Object.values(byIP).sort(
      (a, b) => new Date(b.lastSeen) - new Date(a.lastSeen)
    );
    const paginated = visitors.slice(offset, offset + limit);

    return res.status(200).json({
      visitors: paginated,
      total: visitors.length,
      page,
      limit,
      totalPages: Math.ceil(visitors.length / limit),
    });
  } catch (error) {
    console.error('[Visitors Error]', error);
    return res.status(500).json({ message: 'Failed to fetch visitors.' });
  }
});

// ─── User Management Routes ─────────────────────────────────────────────────

// GET /api/admin/users
router.get('/api/admin/users', authenticateAdmin, requireSuperuser, (req, res) => {
  try {
    const db = readDB();
    const users = db.users.map(({ password, ...u }) => u);
    return res.status(200).json({ users });
  } catch (error) {
    console.error('[Users List Error]', error);
    return res.status(500).json({ message: 'Failed to fetch users.' });
  }
});

// POST /api/admin/users
router.post('/api/admin/users', authenticateAdmin, requireSuperuser, async (req, res) => {
  try {
    const { username, password, role, name, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Username, password, and email are required.' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters.' });
    }

    const db = readDB();

    if (db.users.some((u) => u.username === username)) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      id: uuidv4(),
      username,
      password: hashedPassword,
      role: role || 'editor',
      name: name || username,
      email,
      createdAt: new Date().toISOString(),
    };

    db.users.push(user);
    writeDB(db);

    const { password: _, ...safeUser } = user;
    return res.status(201).json({ message: 'User created.', user: safeUser });
  } catch (error) {
    console.error('[User Create Error]', error);
    return res.status(500).json({ message: 'Failed to create user.' });
  }
});

// PUT /api/admin/users/:id
router.put('/api/admin/users/:id', authenticateAdmin, requireSuperuser, async (req, res) => {
  try {
    const db = readDB();
    const index = db.users.findIndex((u) => u.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const { username, password, role, name, email } = req.body;
    const existing = db.users[index];

    // Check username uniqueness if changed
    if (username && username !== existing.username && db.users.some((u) => u.username === username)) {
      return res.status(400).json({ message: 'Username already exists.' });
    }

    db.users[index] = {
      ...existing,
      username: username || existing.username,
      name: name !== undefined ? name : existing.name,
      email: email || existing.email,
      role: role || existing.role,
    };

    if (password) {
      if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters.' });
      }
      db.users[index].password = await bcrypt.hash(password, 10);
    }

    writeDB(db);

    const { password: _, ...safeUser } = db.users[index];
    return res.status(200).json({ message: 'User updated.', user: safeUser });
  } catch (error) {
    console.error('[User Update Error]', error);
    return res.status(500).json({ message: 'Failed to update user.' });
  }
});

// DELETE /api/admin/users/:id
router.delete('/api/admin/users/:id', authenticateAdmin, requireSuperuser, (req, res) => {
  try {
    const db = readDB();
    const index = db.users.findIndex((u) => u.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Prevent deleting the last superuser
    const superusers = db.users.filter((u) => u.role === 'superuser');
    if (db.users[index].role === 'superuser' && superusers.length <= 1) {
      return res.status(400).json({ message: 'Cannot delete the last superuser.' });
    }

    // Prevent self-deletion
    if (db.users[index].id === req.adminUser.id) {
      return res.status(400).json({ message: 'Cannot delete your own account.' });
    }

    db.users.splice(index, 1);

    // Clean up sessions for deleted user
    db.sessions = db.sessions.filter((s) => s.userId !== req.params.id);

    writeDB(db);

    return res.status(200).json({ message: 'User deleted.' });
  } catch (error) {
    console.error('[User Delete Error]', error);
    return res.status(500).json({ message: 'Failed to delete user.' });
  }
});

export default router;
