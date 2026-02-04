import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

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
      from: `"Fowspel Engineering" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Subscription Successful 🎉",
      html: `
        <h2>Welcome to Fowspel Engineering</h2>
        <p>You have successfully subscribed to our newsletter.</p>
        <p>You'll now receive updates on our projects, services, and innovations.</p>
        <br/>
        <strong>— Fowspel Engineering Team</strong>
      `,
    });

    return NextResponse.json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
