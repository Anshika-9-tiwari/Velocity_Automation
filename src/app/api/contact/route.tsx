import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: { json: () => any; }) {
  try {
    const body = await req.json();
    console.log('Received body:', body); 

    const saved = await prisma.user_info.create({
      data: body,
    });

    return new Response(JSON.stringify({ success: true, saved }), { status: 200 });

  } catch (error) {
    console.error('Contact API Error:', error); 
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
