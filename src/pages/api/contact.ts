import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface Attachment {
  name: string;
  data: string;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  attachments?: Attachment[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message, attachments }: ContactFormData = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: "ishant121003@gmail.com",
    subject: "New Contact Form Submission",
    html: `
      <h2>Hey Ishant, you got a new mail!!</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${message}</blockquote>
      <p><strong>Attachments:</strong> ${
        attachments?.length ? "See attached files" : "None"
      }</p>
    `,
    attachments: attachments?.map((file) => ({
      filename: file.name,
      content: file.data,
      encoding: "base64",
    })),
  };

  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Error sending email", details: error.message });
  }
}
