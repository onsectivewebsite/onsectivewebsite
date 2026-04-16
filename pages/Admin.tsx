import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  PenTool, LayoutDashboard, FileText, LogOut, Users, MessageSquare, Trash2, UserPlus,
  Menu, X, Plus, Edit3, Mail, Shield, BarChart3, Eye, Globe, Clock,
  Monitor, Smartphone, Search, ChevronLeft, ChevronRight, Save,
  Key, AlertCircle, CheckCircle2, ExternalLink, TrendingUp, Activity
} from 'lucide-react';

/* ================================================================== */
/*  TYPES                                                              */
/* ================================================================== */
interface User { id: string; username: string; name: string; email: string; role: string; createdAt: string; }
interface Blog {
  id: string; title: string; slug: string; category: string; excerpt: string; content: string;
  image: string; seoTitle: string; seoDescription: string; seoKeywords: string;
  status: string; author: string; publishedAt: string; createdAt: string; updatedAt: string;
}
interface AnalyticsSummary {
  totalVisits: number; uniqueVisitors: number;
  topPages: { page: string; count: number }[];
  dailyVisits: { date: string; count: number }[];
  recentVisitors: any[];
  topReferrers: { referrer: string; count: number }[];
  browsers: { browser: string; count: number }[];
  devices: { device: string; count: number }[];
}

/* ================================================================== */
/*  API HELPER                                                         */
/* ================================================================== */
const api = async (path: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('admin_token');
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  let res: Response;
  try {
    res = await fetch(path, { ...options, headers: { ...headers, ...options.headers as any } });
  } catch {
    throw new Error('Network error. Make sure the server is running.');
  }
  let data: any;
  try {
    data = await res.json();
  } catch {
    throw new Error(`Server returned status ${res.status}. Please try again.`);
  }
  if (!res.ok) throw new Error(data.error || data.message || 'Request failed');
  return data;
};

/* ================================================================== */
/*  ADMIN COMPONENT                                                    */
/* ================================================================== */
type Tab = 'dashboard' | 'blogs' | 'users' | 'leads' | 'analytics' | 'settings';

const Admin: React.FC = () => {
  /* -------- Auth State -------- */
  const [authStep, setAuthStep] = useState<'login' | '2fa' | 'forgot' | 'reset' | 'authenticated'>('login');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [twoFaCode, setTwoFaCode] = useState('');
  const [tempToken, setTempToken] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [resetForm, setResetForm] = useState({ token: '', password: '', confirm: '' });
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authSuccess, setAuthSuccess] = useState('');

  /* -------- App State -------- */
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  /* -------- Blog State -------- */
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogPage, setBlogPage] = useState(1);
  const [blogTotal, setBlogTotal] = useState(0);
  const [blogView, setBlogView] = useState<'list' | 'editor'>('list');
  const [editingBlog, setEditingBlog] = useState<Partial<Blog>>({
    title: '', slug: '', category: '', excerpt: '', content: '', image: '',
    seoTitle: '', seoDescription: '', seoKeywords: '', status: 'draft'
  });
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  /* -------- User State -------- */
  const [users, setUsers] = useState<User[]>([]);
  const [userView, setUserView] = useState<'list' | 'form'>('list');
  const [editingUser, setEditingUser] = useState({ name: '', username: '', email: '', password: '', role: 'editor' });
  const [editingUserId, setEditingUserId] = useState<string | null>(null);

  /* -------- Analytics State -------- */
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null);
  const [_visitors, setVisitors] = useState<any[]>([]);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);

  /* -------- Leads State -------- */
  const [leads, setLeads] = useState<any[]>([]);

  /* -------- Toast -------- */
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  /* ================================================================ */
  /*  INIT — check token + handle reset link from email                */
  /* ================================================================ */
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const user = localStorage.getItem('admin_user');
    if (token && user) {
      setCurrentUser(JSON.parse(user));
      setAuthStep('authenticated');
      return;
    }
    // Check for ?reset=TOKEN in URL (from password reset email)
    const params = new URLSearchParams(window.location.search);
    const resetToken = params.get('reset');
    if (resetToken) {
      setResetForm(prev => ({ ...prev, token: resetToken }));
      setAuthStep('reset');
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  /* ================================================================ */
  /*  AUTH HANDLERS                                                     */
  /* ================================================================ */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(''); setAuthLoading(true);
    try {
      const data = await api('/api/admin/login', {
        method: 'POST', body: JSON.stringify(loginForm)
      });
      setTempToken(data.tempToken);
      setAuthStep('2fa');
      setAuthSuccess('Verification code sent to your email.');
    } catch (err: any) { setAuthError(err.message); }
    finally { setAuthLoading(false); }
  };

  const handleVerify2FA = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(''); setAuthLoading(true);
    try {
      const data = await api('/api/admin/verify-2fa', {
        method: 'POST', body: JSON.stringify({ tempToken, code: twoFaCode })
      });
      localStorage.setItem('admin_token', data.token);
      localStorage.setItem('admin_user', JSON.stringify(data.user));
      setCurrentUser(data.user);
      setAuthStep('authenticated');
    } catch (err: any) { setAuthError(err.message); }
    finally { setAuthLoading(false); }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(''); setAuthLoading(true);
    try {
      await api('/api/admin/forgot-password', { method: 'POST', body: JSON.stringify({ email: forgotEmail }) });
      setAuthSuccess('Reset link sent to your email. Check your inbox.');
    } catch (err: any) { setAuthError(err.message); }
    finally { setAuthLoading(false); }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (resetForm.password !== resetForm.confirm) { setAuthError('Passwords do not match.'); return; }
    setAuthError(''); setAuthLoading(true);
    try {
      await api('/api/admin/reset-password', {
        method: 'POST', body: JSON.stringify({ token: resetForm.token, newPassword: resetForm.password })
      });
      setAuthSuccess('Password reset successful. You can now log in.');
      setAuthStep('login');
    } catch (err: any) { setAuthError(err.message); }
    finally { setAuthLoading(false); }
  };

  const handleLogout = async () => {
    try { await api('/api/admin/logout', { method: 'POST' }); } catch {}
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    setCurrentUser(null);
    setAuthStep('login');
    setLoginForm({ username: '', password: '' });
  };

  /* ================================================================ */
  /*  DATA FETCHERS                                                    */
  /* ================================================================ */
  const fetchBlogs = useCallback(async () => {
    try {
      const data = await api(`/api/admin/blogs?page=${blogPage}&limit=10`);
      setBlogs(data.blogs); setBlogTotal(data.total);
    } catch {}
  }, [blogPage]);

  const fetchUsers = useCallback(async () => {
    try { const data = await api('/api/admin/users'); setUsers(data); } catch {}
  }, []);

  const fetchAnalytics = useCallback(async () => {
    setAnalyticsLoading(true);
    try {
      const [summary, vis] = await Promise.all([
        api('/api/admin/analytics'),
        api('/api/admin/analytics/visitors?page=1&limit=50')
      ]);
      setAnalytics(summary); setVisitors(vis.visitors);
    } catch {}
    finally { setAnalyticsLoading(false); }
  }, []);

  const fetchLeads = useCallback(async () => {
    try {
      const stored = localStorage.getItem('onsective_leads');
      if (stored) setLeads(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    if (authStep !== 'authenticated') return;
    if (activeTab === 'blogs') fetchBlogs();
    if (activeTab === 'users') fetchUsers();
    if (activeTab === 'analytics') fetchAnalytics();
    if (activeTab === 'leads') fetchLeads();
  }, [activeTab, authStep, fetchBlogs, fetchUsers, fetchAnalytics, fetchLeads]);

  /* ================================================================ */
  /*  BLOG HANDLERS                                                    */
  /* ================================================================ */
  const saveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingBlogId) {
        await api(`/api/admin/blogs/${editingBlogId}`, { method: 'PUT', body: JSON.stringify(editingBlog) });
        showToast('Blog updated successfully');
      } else {
        await api('/api/admin/blogs', { method: 'POST', body: JSON.stringify({ ...editingBlog, content: contentRef.current?.innerHTML || editingBlog.content }) });
        showToast('Blog published successfully');
      }
      setBlogView('list'); resetBlogForm(); fetchBlogs();
    } catch (err: any) { showToast(err.message, 'error'); }
  };

  const deleteBlog = async (id: string) => {
    if (!confirm('Delete this blog permanently?')) return;
    try {
      await api(`/api/admin/blogs/${id}`, { method: 'DELETE' });
      showToast('Blog deleted'); fetchBlogs();
    } catch (err: any) { showToast(err.message, 'error'); }
  };

  const resetBlogForm = () => {
    setEditingBlog({ title: '', slug: '', category: '', excerpt: '', content: '', image: '', seoTitle: '', seoDescription: '', seoKeywords: '', status: 'draft' });
    setEditingBlogId(null);
  };

  /* ================================================================ */
  /*  USER HANDLERS                                                    */
  /* ================================================================ */
  const saveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingUserId) {
        await api(`/api/admin/users/${editingUserId}`, { method: 'PUT', body: JSON.stringify(editingUser) });
        showToast('User updated');
      } else {
        await api('/api/admin/users', { method: 'POST', body: JSON.stringify(editingUser) });
        showToast('User created');
      }
      setUserView('list'); setEditingUser({ name: '', username: '', email: '', password: '', role: 'editor' }); setEditingUserId(null); fetchUsers();
    } catch (err: any) { showToast(err.message, 'error'); }
  };

  const deleteUser = async (id: string) => {
    if (!confirm('Delete this user?')) return;
    try {
      await api(`/api/admin/users/${id}`, { method: 'DELETE' });
      showToast('User removed'); fetchUsers();
    } catch (err: any) { showToast(err.message, 'error'); }
  };

  /* ================================================================ */
  /*  RICH TEXT TOOLBAR                                                 */
  /* ================================================================ */
  const execCmd = (cmd: string, value?: string) => {
    document.execCommand(cmd, false, value);
    contentRef.current?.focus();
  };

  /* ================================================================ */
  /*  RENDER — LOGIN / 2FA / FORGOT                                    */
  /* ================================================================ */
  if (authStep !== 'authenticated') {
    return (
      <div className="min-h-screen bg-[#050a12] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 border border-[#c1912f]/20 overflow-hidden mx-auto mb-4">
              <img src="/assets/icon.jpg" alt="Onsective" className="w-full h-full object-cover" />
            </div>
            <h1 className="text-white text-xl font-serif font-black tracking-tight uppercase">Command Center</h1>
            <p className="text-[#c1912f] text-[9px] font-black uppercase tracking-[0.4em] mt-1">Institutional Access</p>
          </div>

          <div className="bg-[#0a1628] border border-white/10 p-8">
            {/* Error / Success */}
            {authError && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs mb-6">
                <AlertCircle size={14} /> {authError}
              </div>
            )}
            {authSuccess && (
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 text-green-400 text-xs mb-6">
                <CheckCircle2 size={14} /> {authSuccess}
              </div>
            )}

            {/* LOGIN FORM */}
            {authStep === 'login' && (
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-2">Username</label>
                  <input type="text" required className="w-full bg-black/40 border border-white/10 p-3 text-white text-sm focus:border-[#c1912f] outline-none" value={loginForm.username} onChange={e => setLoginForm({ ...loginForm, username: e.target.value })} />
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-2">Password</label>
                  <input type="password" required className="w-full bg-black/40 border border-white/10 p-3 text-white text-sm focus:border-[#c1912f] outline-none" value={loginForm.password} onChange={e => setLoginForm({ ...loginForm, password: e.target.value })} />
                </div>
                <button type="submit" disabled={authLoading} className="w-full bg-[#c1912f] text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-[#a07425] transition-colors disabled:opacity-50">
                  {authLoading ? 'Authenticating...' : 'Sign In'}
                </button>
                <button type="button" onClick={() => { setAuthStep('forgot'); setAuthError(''); setAuthSuccess(''); }} className="w-full text-[#c1912f] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors py-2">
                  Forgot Password?
                </button>
              </form>
            )}

            {/* 2FA FORM */}
            {authStep === '2fa' && (
              <form onSubmit={handleVerify2FA} className="space-y-5">
                <div className="text-center mb-4">
                  <Shield size={32} className="text-[#c1912f] mx-auto mb-3" />
                  <p className="text-white/60 text-xs">Enter the 6-digit code sent to your email</p>
                </div>
                <div>
                  <input type="text" required maxLength={6} pattern="\d{6}" placeholder="000000" className="w-full bg-black/40 border border-white/10 p-4 text-white text-center text-2xl font-mono tracking-[0.5em] focus:border-[#c1912f] outline-none" value={twoFaCode} onChange={e => setTwoFaCode(e.target.value.replace(/\D/g, ''))} />
                </div>
                <button type="submit" disabled={authLoading} className="w-full bg-[#c1912f] text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-[#a07425] transition-colors disabled:opacity-50">
                  {authLoading ? 'Verifying...' : 'Verify Code'}
                </button>
                <button type="button" onClick={() => { setAuthStep('login'); setAuthError(''); setAuthSuccess(''); setTwoFaCode(''); }} className="w-full text-slate-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors py-2">
                  Back to Login
                </button>
              </form>
            )}

            {/* FORGOT PASSWORD */}
            {authStep === 'forgot' && (
              <form onSubmit={handleForgotPassword} className="space-y-5">
                <div className="text-center mb-4">
                  <Key size={32} className="text-[#c1912f] mx-auto mb-3" />
                  <p className="text-white/60 text-xs">Enter your email to receive a reset link</p>
                </div>
                <div>
                  <input type="email" required placeholder="admin@onsective.com" className="w-full bg-black/40 border border-white/10 p-3 text-white text-sm focus:border-[#c1912f] outline-none" value={forgotEmail} onChange={e => setForgotEmail(e.target.value)} />
                </div>
                <button type="submit" disabled={authLoading} className="w-full bg-[#c1912f] text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-[#a07425] transition-colors disabled:opacity-50">
                  {authLoading ? 'Sending...' : 'Send Reset Link'}
                </button>
                <div className="flex gap-2">
                  <button type="button" onClick={() => { setAuthStep('login'); setAuthError(''); setAuthSuccess(''); }} className="flex-1 text-slate-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors py-2">
                    Back to Login
                  </button>
                  <button type="button" onClick={() => { setAuthStep('reset'); setAuthError(''); setAuthSuccess(''); }} className="flex-1 text-[#c1912f] text-[10px] uppercase tracking-widest hover:text-white transition-colors py-2">
                    Have a Token?
                  </button>
                </div>
              </form>
            )}

            {/* RESET PASSWORD */}
            {authStep === 'reset' && (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div>
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-2">Reset Token</label>
                  <input type="text" required placeholder="Paste token from email" className="w-full bg-black/40 border border-white/10 p-3 text-white text-sm focus:border-[#c1912f] outline-none" value={resetForm.token} onChange={e => setResetForm({ ...resetForm, token: e.target.value })} />
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-2">New Password</label>
                  <input type="password" required minLength={8} className="w-full bg-black/40 border border-white/10 p-3 text-white text-sm focus:border-[#c1912f] outline-none" value={resetForm.password} onChange={e => setResetForm({ ...resetForm, password: e.target.value })} />
                </div>
                <div>
                  <label className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] block mb-2">Confirm Password</label>
                  <input type="password" required className="w-full bg-black/40 border border-white/10 p-3 text-white text-sm focus:border-[#c1912f] outline-none" value={resetForm.confirm} onChange={e => setResetForm({ ...resetForm, confirm: e.target.value })} />
                </div>
                <button type="submit" disabled={authLoading} className="w-full bg-[#c1912f] text-white py-3 text-xs font-black uppercase tracking-widest hover:bg-[#a07425] transition-colors disabled:opacity-50">
                  {authLoading ? 'Resetting...' : 'Reset Password'}
                </button>
                <button type="button" onClick={() => { setAuthStep('login'); setAuthError(''); setAuthSuccess(''); }} className="w-full text-slate-500 text-[10px] uppercase tracking-widest hover:text-white transition-colors py-2">
                  Back to Login
                </button>
              </form>
            )}
          </div>

          {/* Footer */}
          <p className="text-center text-slate-600 text-[8px] uppercase tracking-[0.4em] mt-6">Onsective Enterprise Inc. &copy; 2026</p>
        </div>
      </div>
    );
  }

  /* ================================================================ */
  /*  RENDER — AUTHENTICATED ADMIN PANEL                               */
  /* ================================================================ */
  const tabs = [
    { id: 'dashboard' as Tab, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'blogs' as Tab, label: 'Blog Editor', icon: PenTool },
    { id: 'analytics' as Tab, label: 'Analytics', icon: BarChart3 },
    { id: 'users' as Tab, label: 'Users', icon: Users },
    { id: 'leads' as Tab, label: 'Leads', icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row text-[#1a1a2e] font-sans relative">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-[999] flex items-center gap-2 px-4 py-3 rounded shadow-lg text-sm font-medium ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
          {toast.type === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
          {toast.message}
        </div>
      )}

      {/* Mobile Header */}
      <header className="lg:hidden bg-[#0a1628] text-white p-4 flex justify-between items-center sticky top-0 z-[60]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-[#c1912f]/20 overflow-hidden">
            <img src="/assets/icon.jpg" alt="Onsective" className="w-full h-full object-cover" />
          </div>
          <span className="font-serif font-black text-base uppercase">Admin</span>
        </div>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-[#c1912f]">
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#0a1628] text-white flex flex-col z-50 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 border-b border-white/5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-9 h-9 border border-[#c1912f]/20 overflow-hidden">
              <img src="/assets/icon.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-base font-black uppercase">Onsective</h2>
              <span className="text-[8px] text-[#c1912f] font-bold uppercase tracking-[0.3em]">Admin Panel</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => { setActiveTab(tab.id); setBlogView('list'); setUserView('list'); setSidebarOpen(false); }}
              className={`flex items-center gap-3 w-full p-3 text-left transition-all text-xs font-semibold rounded ${activeTab === tab.id ? 'bg-white/10 text-[#c1912f]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 mb-3 px-3">
            <div className="w-8 h-8 bg-[#c1912f]/20 rounded-full flex items-center justify-center text-[#c1912f] text-xs font-bold">
              {currentUser?.name?.charAt(0) || 'A'}
            </div>
            <div className="min-w-0">
              <p className="text-white text-xs font-semibold truncate">{currentUser?.name}</p>
              <p className="text-slate-500 text-[9px] uppercase">{currentUser?.role}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-2 w-full p-3 text-red-400 hover:text-red-300 text-xs font-semibold rounded hover:bg-white/5 transition-colors">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        <div className="p-4 sm:p-6 lg:p-8 max-w-[1400px]">

          {/* ========== DASHBOARD ========== */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-black uppercase">Dashboard</h1>
                <p className="text-slate-400 text-xs mt-1">Welcome back, {currentUser?.name}</p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: FileText, val: blogTotal || blogs.length, label: 'Blog Posts', color: 'text-blue-500' },
                  { icon: Users, val: users.length, label: 'Team Members', color: 'text-green-500' },
                  { icon: MessageSquare, val: leads.length, label: 'Leads', color: 'text-purple-500' },
                  { icon: Eye, val: analytics?.totalVisits || 0, label: 'Total Visits', color: 'text-orange-500' },
                ].map((s, i) => (
                  <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
                    <s.icon className={s.color} size={20} />
                    <p className="text-2xl font-serif font-black mt-3">{s.val}</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                  <h3 className="text-sm font-bold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => { setActiveTab('blogs'); setBlogView('editor'); resetBlogForm(); }} className="p-3 bg-white border border-slate-200 rounded text-xs font-semibold hover:border-[#c1912f] transition-colors flex items-center gap-2">
                      <Plus size={14} className="text-[#c1912f]" /> New Blog Post
                    </button>
                    <button onClick={() => { setActiveTab('users'); setUserView('form'); }} className="p-3 bg-white border border-slate-200 rounded text-xs font-semibold hover:border-[#c1912f] transition-colors flex items-center gap-2">
                      <UserPlus size={14} className="text-[#c1912f]" /> Add User
                    </button>
                    <button onClick={() => setActiveTab('analytics')} className="p-3 bg-white border border-slate-200 rounded text-xs font-semibold hover:border-[#c1912f] transition-colors flex items-center gap-2">
                      <BarChart3 size={14} className="text-[#c1912f]" /> View Analytics
                    </button>
                    <button onClick={() => setActiveTab('leads')} className="p-3 bg-white border border-slate-200 rounded text-xs font-semibold hover:border-[#c1912f] transition-colors flex items-center gap-2">
                      <MessageSquare size={14} className="text-[#c1912f]" /> View Leads
                    </button>
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                  <h3 className="text-sm font-bold mb-4">System Info</h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between"><span className="text-slate-400">Platform</span><span className="font-semibold">Onsective CMS v2.0</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Environment</span><span className="font-semibold text-green-600">Production</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Your Role</span><span className="font-semibold text-[#c1912f] uppercase">{currentUser?.role}</span></div>
                    <div className="flex justify-between"><span className="text-slate-400">Session</span><span className="font-semibold text-green-600">Active (24h)</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========== BLOG EDITOR ========== */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-black uppercase">{blogView === 'editor' ? (editingBlogId ? 'Edit Post' : 'New Post') : 'Blog Posts'}</h1>
                  <p className="text-slate-400 text-xs mt-1">{blogView === 'list' ? `${blogTotal || blogs.length} total posts` : 'WordPress-style content editor'}</p>
                </div>
                {blogView === 'list' && (
                  <button onClick={() => { setBlogView('editor'); resetBlogForm(); }} className="flex items-center gap-2 bg-[#c1912f] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#a07425] transition-colors rounded">
                    <Plus size={14} /> New Post
                  </button>
                )}
              </div>

              {blogView === 'list' ? (
                <div className="space-y-3">
                  {blogs.length === 0 && <p className="text-slate-400 text-sm py-12 text-center">No blog posts yet. Create your first post.</p>}
                  {blogs.map(blog => (
                    <div key={blog.id} className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 group hover:border-[#c1912f]/30 transition-colors">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`text-[8px] font-bold px-2 py-0.5 uppercase rounded ${blog.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{blog.status}</span>
                          <span className="text-[9px] text-slate-400">{blog.category}</span>
                          <span className="text-[9px] text-slate-300">{blog.publishedAt || blog.createdAt}</span>
                        </div>
                        <h3 className="text-sm font-bold truncate">{blog.title}</h3>
                        <p className="text-xs text-slate-400 truncate">{blog.excerpt}</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button onClick={() => { setEditingBlogId(blog.id); setEditingBlog(blog); setBlogView('editor'); }} className="p-2 text-slate-400 hover:text-[#c1912f] transition-colors" title="Edit"><Edit3 size={15} /></button>
                        <button onClick={() => deleteBlog(blog.id)} className="p-2 text-slate-300 hover:text-red-500 transition-colors" title="Delete"><Trash2 size={15} /></button>
                        {blog.slug && <a href={`/insights/${blog.slug}`} target="_blank" rel="noreferrer" className="p-2 text-slate-300 hover:text-blue-500 transition-colors" title="View"><ExternalLink size={15} /></a>}
                      </div>
                    </div>
                  ))}
                  {/* Pagination */}
                  {blogTotal > 10 && (
                    <div className="flex items-center justify-center gap-4 pt-4">
                      <button disabled={blogPage <= 1} onClick={() => setBlogPage(p => p - 1)} className="p-2 border border-slate-200 rounded disabled:opacity-30"><ChevronLeft size={16} /></button>
                      <span className="text-xs font-semibold">Page {blogPage} of {Math.ceil(blogTotal / 10)}</span>
                      <button disabled={blogPage >= Math.ceil(blogTotal / 10)} onClick={() => setBlogPage(p => p + 1)} className="p-2 border border-slate-200 rounded disabled:opacity-30"><ChevronRight size={16} /></button>
                    </div>
                  )}
                </div>
              ) : (
                /* ===== BLOG EDITOR FORM ===== */
                <form onSubmit={saveBlog} className="space-y-6">
                  {/* Title + Slug */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Title</label>
                      <input required value={editingBlog.title} onChange={e => setEditingBlog({ ...editingBlog, title: e.target.value, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" placeholder="Enter blog title..." />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Slug</label>
                      <input value={editingBlog.slug} onChange={e => setEditingBlog({ ...editingBlog, slug: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f] font-mono text-xs" />
                    </div>
                  </div>

                  {/* Category + Status + Image */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Category</label>
                      <select value={editingBlog.category} onChange={e => setEditingBlog({ ...editingBlog, category: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]">
                        <option value="">Select...</option>
                        {['Artificial Intelligence', 'Cloud & Infrastructure', 'Cybersecurity', 'Digital Transformation', 'Enterprise SEO', 'Digital Marketing', 'Brand Strategy', 'Industry Insights', 'Custom Software'].map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Status</label>
                      <select value={editingBlog.status} onChange={e => setEditingBlog({ ...editingBlog, status: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Featured Image URL</label>
                      <input value={editingBlog.image} onChange={e => setEditingBlog({ ...editingBlog, image: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" placeholder="https://..." />
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Excerpt</label>
                    <textarea value={editingBlog.excerpt} onChange={e => setEditingBlog({ ...editingBlog, excerpt: e.target.value })} rows={2} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f] resize-none" placeholder="Brief summary for listings..." />
                  </div>

                  {/* Rich Text Editor */}
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Content</label>
                    {/* Toolbar */}
                    <div className="flex flex-wrap gap-1 p-2 bg-slate-100 border border-slate-200 border-b-0 rounded-t">
                      {[
                        { cmd: 'bold', label: 'B', style: 'font-bold' },
                        { cmd: 'italic', label: 'I', style: 'italic' },
                        { cmd: 'underline', label: 'U', style: 'underline' },
                        { cmd: 'strikeThrough', label: 'S', style: 'line-through' },
                      ].map(b => (
                        <button key={b.cmd} type="button" onClick={() => execCmd(b.cmd)} className={`w-8 h-8 flex items-center justify-center text-xs ${b.style} bg-white border border-slate-200 rounded hover:border-[#c1912f] transition-colors`}>{b.label}</button>
                      ))}
                      <div className="w-px h-8 bg-slate-200 mx-1"></div>
                      <button type="button" onClick={() => execCmd('formatBlock', 'h2')} className="px-2 h-8 text-[10px] font-bold bg-white border border-slate-200 rounded hover:border-[#c1912f]">H2</button>
                      <button type="button" onClick={() => execCmd('formatBlock', 'h3')} className="px-2 h-8 text-[10px] font-bold bg-white border border-slate-200 rounded hover:border-[#c1912f]">H3</button>
                      <button type="button" onClick={() => execCmd('formatBlock', 'p')} className="px-2 h-8 text-[10px] font-bold bg-white border border-slate-200 rounded hover:border-[#c1912f]">P</button>
                      <div className="w-px h-8 bg-slate-200 mx-1"></div>
                      <button type="button" onClick={() => execCmd('insertUnorderedList')} className="px-2 h-8 text-[10px] bg-white border border-slate-200 rounded hover:border-[#c1912f]">List</button>
                      <button type="button" onClick={() => execCmd('insertOrderedList')} className="px-2 h-8 text-[10px] bg-white border border-slate-200 rounded hover:border-[#c1912f]">1.2.3</button>
                      <button type="button" onClick={() => execCmd('formatBlock', 'blockquote')} className="px-2 h-8 text-[10px] bg-white border border-slate-200 rounded hover:border-[#c1912f]">Quote</button>
                      <div className="w-px h-8 bg-slate-200 mx-1"></div>
                      <button type="button" onClick={() => { const url = prompt('Enter link URL:'); if (url) execCmd('createLink', url); }} className="px-2 h-8 text-[10px] bg-white border border-slate-200 rounded hover:border-[#c1912f]">Link</button>
                      <button type="button" onClick={() => { const url = prompt('Enter image URL:'); if (url) execCmd('insertImage', url); }} className="px-2 h-8 text-[10px] bg-white border border-slate-200 rounded hover:border-[#c1912f]">Img</button>
                    </div>
                    {/* Content editable area */}
                    <div
                      ref={contentRef}
                      contentEditable
                      suppressContentEditableWarning
                      dangerouslySetInnerHTML={{ __html: editingBlog.content || '' }}
                      className="w-full min-h-[300px] p-4 bg-white border border-slate-200 rounded-b text-sm outline-none focus:border-[#c1912f] prose prose-sm max-w-none"
                      style={{ lineHeight: '1.8' }}
                    />
                  </div>

                  {/* SEO Section */}
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Search size={16} className="text-[#c1912f]" />
                      <h3 className="text-sm font-bold">SEO Settings</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">SEO Title</label>
                        <input value={editingBlog.seoTitle} onChange={e => setEditingBlog({ ...editingBlog, seoTitle: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" placeholder="Custom title for search engines..." />
                        <p className="text-[10px] text-slate-400 mt-1">{(editingBlog.seoTitle || '').length}/60 characters</p>
                      </div>
                      <div>
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Meta Description</label>
                        <textarea value={editingBlog.seoDescription} onChange={e => setEditingBlog({ ...editingBlog, seoDescription: e.target.value })} rows={2} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f] resize-none" placeholder="Description for search results..." />
                        <p className="text-[10px] text-slate-400 mt-1">{(editingBlog.seoDescription || '').length}/160 characters</p>
                      </div>
                      <div>
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Keywords (comma-separated)</label>
                        <input value={editingBlog.seoKeywords} onChange={e => setEditingBlog({ ...editingBlog, seoKeywords: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" placeholder="keyword1, keyword2, keyword3" />
                      </div>
                      {/* SEO Preview */}
                      <div className="bg-white border border-slate-200 rounded p-4">
                        <p className="text-[9px] text-slate-400 uppercase tracking-wider mb-2 font-bold">Google Preview</p>
                        <p className="text-blue-700 text-sm font-medium truncate">{editingBlog.seoTitle || editingBlog.title || 'Blog Title'} | Onsective</p>
                        <p className="text-green-700 text-xs truncate">onsective.com/insights/{editingBlog.slug || 'post-slug'}</p>
                        <p className="text-slate-500 text-xs mt-1 line-clamp-2">{editingBlog.seoDescription || editingBlog.excerpt || 'Meta description will appear here...'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button type="submit" className="flex items-center justify-center gap-2 bg-[#c1912f] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#a07425] transition-colors rounded">
                      <Save size={14} /> {editingBlogId ? 'Update Post' : 'Publish Post'}
                    </button>
                    <button type="button" onClick={() => { setBlogView('list'); resetBlogForm(); }} className="flex items-center justify-center gap-2 border border-slate-200 px-6 py-3 text-xs font-bold uppercase tracking-wider hover:border-[#c1912f] transition-colors rounded">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ========== ANALYTICS ========== */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-black uppercase">Analytics</h1>
                  <p className="text-slate-400 text-xs mt-1">Visitor insights and traffic data</p>
                </div>
                <button onClick={fetchAnalytics} className="text-xs text-[#c1912f] font-bold uppercase hover:text-[#a07425] transition-colors flex items-center gap-1">
                  <Activity size={14} /> Refresh
                </button>
              </div>

              {analyticsLoading ? (
                <div className="text-center py-20 text-slate-400 text-sm">Loading analytics...</div>
              ) : analytics ? (
                <>
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-5 bg-[#0a1628] text-white rounded-lg">
                      <Eye size={18} className="text-[#c1912f] mb-2" />
                      <p className="text-2xl font-serif font-black">{analytics.totalVisits.toLocaleString()}</p>
                      <p className="text-[9px] uppercase tracking-wider text-white/50 mt-1">Total Page Views</p>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
                      <Users size={18} className="text-blue-500 mb-2" />
                      <p className="text-2xl font-serif font-black">{analytics.uniqueVisitors.toLocaleString()}</p>
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mt-1">Unique Visitors</p>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
                      <Globe size={18} className="text-green-500 mb-2" />
                      <p className="text-2xl font-serif font-black">{analytics.topPages.length}</p>
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mt-1">Pages Tracked</p>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
                      <TrendingUp size={18} className="text-purple-500 mb-2" />
                      <p className="text-2xl font-serif font-black">{analytics.topReferrers.length}</p>
                      <p className="text-[9px] uppercase tracking-wider text-slate-400 mt-1">Traffic Sources</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Daily Visits Chart (simple bar) */}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                      <h3 className="text-sm font-bold mb-4">Daily Visits (Last 30 Days)</h3>
                      {analytics.dailyVisits.length > 0 ? (
                        <div className="flex items-end gap-1 h-32">
                          {analytics.dailyVisits.slice(-30).map((day, i) => {
                            const max = Math.max(...analytics.dailyVisits.map(d => d.count), 1);
                            return (
                              <div key={i} className="flex-1 flex flex-col items-center gap-1" title={`${day.date}: ${day.count} visits`}>
                                <div className="w-full bg-[#c1912f]/20 rounded-t hover:bg-[#c1912f]/40 transition-colors" style={{ height: `${(day.count / max) * 100}%`, minHeight: '2px' }}></div>
                              </div>
                            );
                          })}
                        </div>
                      ) : <p className="text-slate-400 text-xs">No data yet</p>}
                    </div>

                    {/* Top Pages */}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                      <h3 className="text-sm font-bold mb-4">Top Pages</h3>
                      <div className="space-y-2">
                        {analytics.topPages.slice(0, 8).map((p, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-slate-600 truncate mr-4">{p.page}</span>
                            <span className="font-bold text-[#c1912f] shrink-0">{p.count}</span>
                          </div>
                        ))}
                        {analytics.topPages.length === 0 && <p className="text-slate-400 text-xs">No data yet</p>}
                      </div>
                    </div>

                    {/* Browsers */}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                      <h3 className="text-sm font-bold mb-4">Browsers</h3>
                      <div className="space-y-2">
                        {analytics.browsers.slice(0, 6).map((b, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-slate-600">{b.browser}</span>
                            <span className="font-bold">{b.count}</span>
                          </div>
                        ))}
                        {analytics.browsers.length === 0 && <p className="text-slate-400 text-xs">No data yet</p>}
                      </div>
                    </div>

                    {/* Devices */}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                      <h3 className="text-sm font-bold mb-4">Devices</h3>
                      <div className="space-y-2">
                        {analytics.devices.map((d, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs">
                            {d.device === 'Mobile' ? <Smartphone size={14} className="text-blue-500" /> : <Monitor size={14} className="text-green-500" />}
                            <span className="text-slate-600 flex-1">{d.device}</span>
                            <span className="font-bold">{d.count}</span>
                          </div>
                        ))}
                        {analytics.devices.length === 0 && <p className="text-slate-400 text-xs">No data yet</p>}
                      </div>
                    </div>

                    {/* Top Referrers */}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                      <h3 className="text-sm font-bold mb-4">Top Referrers</h3>
                      <div className="space-y-2">
                        {analytics.topReferrers.slice(0, 8).map((r, i) => (
                          <div key={i} className="flex items-center justify-between text-xs">
                            <span className="text-slate-600 truncate mr-4">{r.referrer}</span>
                            <span className="font-bold">{r.count}</span>
                          </div>
                        ))}
                        {analytics.topReferrers.length === 0 && <p className="text-slate-400 text-xs">No data yet</p>}
                      </div>
                    </div>

                    {/* Recent Visitors */}
                    <div className="bg-slate-50 border border-slate-100 rounded-lg p-5">
                      <h3 className="text-sm font-bold mb-4">Recent Visitors</h3>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {analytics.recentVisitors.slice(0, 15).map((v: any, i: number) => (
                          <div key={i} className="flex items-center justify-between text-[10px] py-1 border-b border-slate-100 last:border-0">
                            <div>
                              <span className="text-slate-600 font-mono">{v.ip}</span>
                              <span className="text-slate-400 ml-2">{v.page}</span>
                            </div>
                            <span className="text-slate-400 shrink-0">{new Date(v.timestamp).toLocaleString()}</span>
                          </div>
                        ))}
                        {analytics.recentVisitors.length === 0 && <p className="text-slate-400 text-xs">No data yet</p>}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-20 text-slate-400 text-sm">No analytics data available. Tracking begins automatically when visitors load the site.</div>
              )}
            </div>
          )}

          {/* ========== USERS ========== */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-black uppercase">{userView === 'form' ? (editingUserId ? 'Edit User' : 'Add User') : 'Team'}</h1>
                  <p className="text-slate-400 text-xs mt-1">{currentUser?.role === 'superuser' ? 'Manage team members and roles' : 'View team members'}</p>
                </div>
                {userView === 'list' && currentUser?.role === 'superuser' && (
                  <button onClick={() => { setUserView('form'); setEditingUserId(null); setEditingUser({ name: '', username: '', email: '', password: '', role: 'editor' }); }} className="flex items-center gap-2 bg-[#c1912f] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#a07425] transition-colors rounded">
                    <UserPlus size={14} /> Add User
                  </button>
                )}
              </div>

              {userView === 'list' ? (
                <div className="bg-white border border-slate-100 rounded-lg overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-50 text-[9px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                        <th className="p-4">Name</th>
                        <th className="p-4">Username</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Role</th>
                        {currentUser?.role === 'superuser' && <th className="p-4 text-right">Actions</th>}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {users.map(u => (
                        <tr key={u.id} className="hover:bg-slate-50 transition-colors text-sm">
                          <td className="p-4 font-semibold">{u.name}</td>
                          <td className="p-4 font-mono text-xs text-slate-500">{u.username}</td>
                          <td className="p-4 text-xs text-slate-500">{u.email}</td>
                          <td className="p-4"><span className={`text-[8px] font-bold px-2 py-1 uppercase rounded ${u.role === 'superuser' ? 'bg-[#c1912f]/10 text-[#c1912f]' : 'bg-slate-100 text-slate-500'}`}>{u.role}</span></td>
                          {currentUser?.role === 'superuser' && (
                            <td className="p-4 text-right space-x-2">
                              <button onClick={() => { setEditingUserId(u.id); setEditingUser({ name: u.name, username: u.username, email: u.email, password: '', role: u.role }); setUserView('form'); }} className="text-slate-400 hover:text-[#c1912f]"><Edit3 size={14} /></button>
                              <button onClick={() => deleteUser(u.id)} className="text-slate-300 hover:text-red-500"><Trash2 size={14} /></button>
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <form onSubmit={saveUser} className="space-y-5 max-w-2xl bg-slate-50 p-6 border border-slate-100 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Full Name</label>
                      <input required value={editingUser.name} onChange={e => setEditingUser({ ...editingUser, name: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Username</label>
                      <input required value={editingUser.username} onChange={e => setEditingUser({ ...editingUser, username: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Email</label>
                      <input type="email" required value={editingUser.email} onChange={e => setEditingUser({ ...editingUser, email: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Password {editingUserId && '(leave blank to keep)'}</label>
                      <input type="password" {...(editingUserId ? {} : { required: true })} minLength={8} value={editingUser.password} onChange={e => setEditingUser({ ...editingUser, password: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Role</label>
                    <select value={editingUser.role} onChange={e => setEditingUser({ ...editingUser, role: e.target.value })} className="w-full p-3 bg-white border border-slate-200 rounded text-sm outline-none focus:border-[#c1912f]">
                      <option value="editor">Editor</option>
                      <option value="manager">Manager</option>
                      <option value="superuser">Superuser</option>
                    </select>
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="bg-[#c1912f] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#a07425] transition-colors rounded">{editingUserId ? 'Update User' : 'Create User'}</button>
                    <button type="button" onClick={() => { setUserView('list'); setEditingUserId(null); }} className="border border-slate-200 px-6 py-3 text-xs font-bold uppercase tracking-wider hover:border-[#c1912f] transition-colors rounded">Cancel</button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* ========== LEADS ========== */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <h1 className="text-2xl sm:text-3xl font-serif font-black uppercase">Leads</h1>
              <div className="space-y-4">
                {leads.length === 0 && <p className="text-slate-400 text-sm py-12 text-center">No leads yet. Leads from the contact form will appear here.</p>}
                {leads.map((l: any, i: number) => (
                  <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <span className="text-[8px] font-bold bg-[#c1912f]/10 text-[#c1912f] px-2 py-0.5 uppercase rounded">{l.service}</span>
                        <h3 className="text-base font-bold mt-2">{l.firstName} {l.lastName}</h3>
                        <p className="text-slate-400 text-xs italic mt-1 max-w-xl">"{l.message}"</p>
                        <div className="flex flex-wrap gap-4 mt-3 text-[10px] text-slate-400">
                          <span className="flex items-center gap-1"><Mail size={10} /> {l.email}</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {new Date(l.timestamp).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>}
    </div>
  );
};

export default Admin;
