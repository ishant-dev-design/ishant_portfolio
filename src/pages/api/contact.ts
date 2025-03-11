import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Validate email format using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    // Admin Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "ishant121003@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 12px; background-color: #0d0d0d; color: #fff;">
          <h2 style="color: #9eff00; text-align: center;">New Contact Submission</h2>
          <div style="padding: 15px; border-radius: 12px; background: #1a1a1a;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p style="text-align: right; font-size: 12px; color: #9eff00;">Timestamp: ${timestamp}</p>
          </div>
        </div>
      `,
    });

    // User Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 12px; background-color: #0d0d0d; color: #fff;">
          <h2 style="color: #9eff00; text-align: center;">Thank You for Reaching Out!</h2>
          <p style="text-align: center;">Hello <strong>${name}</strong>,</p>
          <p style="text-align: center;">We have received your message and will get back to you as soon as possible.</p>
          <div style="padding: 15px; border-radius: 12px; background: #1a1a1a; text-align: center;">
            <p><strong>Your Message:</strong></p>
            <p>${message}</p>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://yourportfolio.com" style="padding: 10px 20px; border-radius: 12px; background-color: #9eff00; color: #0d0d0d; text-decoration: none; font-weight: bold;">Visit Portfolio</a>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
