// src/app/api/contact/route.ts
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json(); // ✅ correctly reads the request body

    console.log('Received body:', body);

    const saved = await prisma.user_info.create({
      data: body,
    });

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
