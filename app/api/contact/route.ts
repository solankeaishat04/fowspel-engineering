import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { useContactSchema } from "@/schemas/useContact";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = useContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, 
      replyTo: email,                              
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
