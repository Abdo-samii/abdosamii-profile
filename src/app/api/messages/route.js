import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // حفظ البيانات في قاعدة البيانات
    const newMessage = await prisma.message.create({
      data: { email, subject, message },
    });

    return new Response(JSON.stringify({ success: true, message: newMessage }), { status: 200 });
  } catch (error) {
    console.error("Error saving message:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to save message" }), { status: 500 });
  }
}
