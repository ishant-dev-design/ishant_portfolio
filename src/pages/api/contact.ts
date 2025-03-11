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

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "ishant121003@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #333; text-align: center;">Thank You for Reaching Out!</h2>
          <p style="color: #555;">Hello <strong>${name}</strong>,</p>
          <p style="color: #555;">We have received your message and will get back to you as soon as possible.</p>
          <div style="border-left: 4px solid #007bff; padding-left: 10px; margin: 20px 0; color: #333;">
            <p><strong>Your Message:</strong></p>
            <p>${message}</p>
          </div>
          <p style="color: #555;">Best Regards,<br/><strong>Your Company Name</strong></p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
