// src/app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      full_name,
      your_company,
      email_id,
      phone_no,
      product_name,
      message
    } = body;

    if (!full_name || !your_company || !email_id || !phone_no || !product_name || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create record in DB
    const saved = await prisma.user_details.create({
      data: {
        full_name,
        your_company,
        email_id,
        phone_no,
        product_name,
        message,
      },
    });

    // 2. Send email
    await resend.emails.send({
      from: 'Velocity Automation <info@velocityautomation.co.in>', 
      to: process.env.NOTIFY_EMAIL!,
      subject:  `New Contact Form Submission: ${full_name}`,
      html: `
        <h2>New User Request</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email_id}</p>
        <p><strong>Phone:</strong> ${phone_no}</p>
        <p><strong>Phone:</strong> ${product_name}</p>
        <p><strong>Company:</strong> ${your_company}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // // 3. Return success response
    // await resend.emails.send({
    //   from: process.env.RESEND_FROM_EMAIL!,
    //   to: email_id, // user email from form
    //   subject: 'Thank you for contacting KP Automation',
    //   html: `
    //     <p>Dear ${full_name},</p>
    //     <p>Thank you for contacting KP Automation. We have received your message and will get back to you shortly.</p>
    //     <br/>
    //     <p>Best regards,<br/>Team KP Automation</p>
    //   `,
    // });

    return new Response(JSON.stringify({ success: true, saved }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
