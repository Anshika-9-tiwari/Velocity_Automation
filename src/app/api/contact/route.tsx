// src/app/api/contact/route.ts
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      full_name,
      your_company,
      email_id,
      phone_no,
      product_name,
      message,
    } = body;

    if (!full_name || !your_company || !email_id || !phone_no || !product_name || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Basic email format validation
    if (!process.env.NOTIFY_EMAIL) {
      return new Response(JSON.stringify({ error: 'Notification email environment variable not set' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const recipients = process.env.NOTIFY_EMAIL.split(",");

    // Send notification email to your team (with CC + BCC)
    await resend.emails.send({
      from: 'Velocity Automation <enquiry@velocityautomation.co.in>',
      to: recipients, 
      // cc: process.env.CC_EMAIL,     
      // bcc: process.env.BCC_EMAIL,   
      subject: `New Contact Form Submission: ${full_name}`,
      html: `
        <h2>New User Request</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email_id}</p>
        <p><strong>Phone:</strong> ${phone_no}</p>
        <p><strong>Product:</strong> ${product_name}</p>
        <p><strong>Company:</strong> ${your_company}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // Send auto-reply to the user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email_id,
      subject: 'Thank you for contacting Velocity Automation',
      html: `
        <p>Dear ${full_name},</p>
        <p>Thank you for contacting <strong>Velocity Automation</strong>. We have received your message and will get back to you soon.</p>
        <br/>
        <p>Best regards,<br/>Team Velocity Automation</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
