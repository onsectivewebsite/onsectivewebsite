import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

/**
 * GOOGLE SHEETS SETUP
 */
const SHEET_ID = process.env.SHEET_ID;
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

/**
 * HOSTINGER SMTP EMAIL SETUP
 * Using credentials provided for info@onsective.com
 */
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // Use SSL for port 465
  auth: {
    user: process.env.EMAIL_USER || 'info@onsective.com',
    pass: process.env.EMAIL_PASS || 'Ons3ctiv3.',
  },
  connectionTimeout: 10000,
});

// Contact API Endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, service, message, timestamp } = req.body;

  if (!email || !firstName) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // 1a. Send Email Notification to Admin
    const adminMailOptions = {
      from: `"Onsective Web Leads" <${process.env.EMAIL_USER || 'info@onsective.com'}>`,
      to: 'onsectivewebsite@gmail.com', // Lead recipient
      replyTo: email, // Direct reply to sender
      subject: `New Lead: ${firstName} ${lastName} - ${service}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; border: 1px solid #e2e8f0; border-radius: 0; background-color: #ffffff; color: #0f172a;">
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="display: inline-block; width: 60px; height: 60px; background-color: #020617; color: #C5A059; line-height: 60px; font-size: 28px; font-weight: bold; border: 1px solid #C5A059;">O</div>
            <h1 style="color: #020617; font-size: 22px; margin-top: 20px; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 900;">Onsective Enterprise</h1>
            <p style="font-size: 10px; color: #C5A059; letter-spacing: 0.5em; text-transform: uppercase; margin-top: 5px; font-weight: bold;">Lead Intelligence Report</p>
          </div>
          
          <div style="margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
            <h2 style="color: #020617; font-size: 14px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 20px; border-left: 4px solid #C5A059; padding-left: 15px; font-weight: 800;">Personnel Profile</h2>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 150px; text-transform: uppercase; font-size: 10px; font-weight: 900;">Full Name</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; text-transform: uppercase; font-size: 10px; font-weight: 900;">Contact Email</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; text-transform: uppercase; font-size: 10px; font-weight: 900;">Objective</td>
                <td style="padding: 8px 0; color: #C5A059; font-weight: 900;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; text-transform: uppercase; font-size: 10px; font-weight: 900;">Timestamp</td>
                <td style="padding: 8px 0; color: #0f172a;">${new Date(timestamp).toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div>
            <h2 style="color: #020617; font-size: 14px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 20px; border-left: 4px solid #C5A059; padding-left: 15px; font-weight: 800;">Engagement Briefing</h2>
            <div style="background: #f8fafc; padding: 30px; border: 1px solid #f1f5f9; font-style: normal; line-height: 1.8; color: #334155; font-size: 15px;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #f1f5f9; text-align: center; font-size: 9px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.3em; font-weight: bold;">
            This transmission is strictly confidential and intended for authorized Onsective partners only.
          </div>
        </div>
      `,
    };

    // 1b. Send Confirmation Email to Sender
    const clientMailOptions = {
      from: `"Onsective Enterprise" <${process.env.EMAIL_USER || 'info@onsective.com'}>`,
      to: email, // To the person who filled the form
      subject: `Strategic Briefing Received: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px; border: 1px solid #e2e8f0; border-radius: 0; background-color: #ffffff; color: #0f172a;">
          <div style="text-align: center; margin-bottom: 40px;">
            <div style="display: inline-block; width: 60px; height: 60px; background-color: #020617; color: #C5A059; line-height: 60px; font-size: 28px; font-weight: bold; border: 1px solid #C5A059;">O</div>
            <h1 style="color: #020617; font-size: 22px; margin-top: 20px; letter-spacing: 0.3em; text-transform: uppercase; font-weight: 900;">Onsective Enterprise</h1>
          </div>
          
          <div style="margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 30px;">
            <p style="font-size: 16px; line-height: 1.8; color: #334155;">
              Dear <strong>${firstName} ${lastName}</strong>,
            </p>
            <p style="font-size: 16px; line-height: 1.8; color: #334155;">
              This serves as official confirmation that your strategic briefing regarding <strong>${service}</strong> has been successfully received by Onsective's global intelligence node.
            </p>
            <p style="font-size: 16px; line-height: 1.8; color: #334155;">
              Your inquiry has been assigned to our senior directorship for immediate triage. We acknowledge the critical nature of your digital transformation mandates and will initiate a formal response within one business day.
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-left: 4px solid #C5A059; margin-bottom: 30px;">
            <p style="font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 5px; font-weight: 800;">Transmission Summary</p>
            <p style="font-size: 14px; color: #0f172a; margin: 0;"><strong>Case Objective:</strong> ${service}</p>
            <p style="font-size: 14px; color: #0f172a; margin: 5px 0 0 0;"><strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString()}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.8; color: #334155;">
            Thank you for choosing Onsective as your partner in technical excellence and sovereign growth.
          </p>
          
          <div style="margin-top: 50px; padding-top: 20px; border-top: 1px solid #f1f5f9;">
            <p style="font-size: 14px; color: #020617; font-weight: bold; margin-bottom: 5px;">The Onsective Executive Desk</p>
            <p style="font-size: 12px; color: #64748b; margin: 0;">Global Enterprise Consulting</p>
          </div>
        </div>
      `,
    };

    const adminEmailPromise = transporter.sendMail(adminMailOptions);
    const clientEmailPromise = transporter.sendMail(clientMailOptions);

    // 2. Append to Google Sheets
    let sheetPromise = Promise.resolve();
    if (SHEET_ID && GOOGLE_SERVICE_ACCOUNT_EMAIL && GOOGLE_PRIVATE_KEY) {
      const auth = new JWT({
        email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: GOOGLE_PRIVATE_KEY,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const doc = new GoogleSpreadsheet(SHEET_ID, auth);
      sheetPromise = (async () => {
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        await sheet.addRow({
          Timestamp: new Date(timestamp).toLocaleString(),
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Service: service,
          Message: message
        });
      })();
    }

    await Promise.all([adminEmailPromise, clientEmailPromise, sheetPromise]);
    res.status(200).json({ message: 'Inquiry received successfully' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Internal Server Error. Please verify SMTP and Sheet credentials.' });
  }
});


app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Onsective Enterprise Backend'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});