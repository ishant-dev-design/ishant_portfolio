import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { blogs } from "../../data/blogs";

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

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  // Fetch user IP and User-Agent
  const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"] || "Unknown";

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
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 12px; background-color: #f4f4f4; color: #333;">
          <h2 style="color: #333; text-align: center;">🚀 New Form Submission</h2>
          <div style="padding: 15px; border-radius: 12px; background: #fff;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></p>
            <p><strong>Message:</strong> ${message}</p>
            <hr>
            <p><strong>IP Address:</strong> ${userIp}</p>
            <p><strong>Browser Info:</strong> ${userAgent}</p>
            <p style="text-align: right; font-size: 12px; color: #666;">📅 Timestamp: ${timestamp}</p>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}" style="padding: 10px 20px; border-radius: 12px; background-color: #007bff; color: #fff; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });

    // Generate blog section
    const blogHtml = blogs
      .slice(0, 3)
      .map(
        (blog) => `
        <div style="display: inline-block; width: 30%; margin: 5px; padding: 10px; background: #eee; border-radius: 10px; text-align: center;">
          <h4>${blog.title}</h4>
          <p>${blog.excerpt}</p>
          <a href="https://yourportfolio.com/blogs/${blog.slug}" style="color: #007bff; text-decoration: none;">Read More</a>
        </div>
      `
      )
      .join("");

    // User Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for Contacting Me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 12px; background-color: #f4f4f4; color: #333;">
          <h2 style="color: #007bff; text-align: center;">Hi <strong>${name}</strong>!</h2>
          <p style="text-align: center;">I have received your message and will get back to you as soon as possible.</p>
          
          <h3 style="text-align: center;">🎯 Meanwhile, Check These Articles:</h3>
          <div style="display: flex; justify-content: center; flex-wrap: wrap;">
            ${blogHtml}
          </div>

          <div style="text-align: center; margin-top: 20px;">
            <a href="https://yourportfolio.com" style="padding: 10px 20px; border-radius: 12px; background-color: #007bff; color: #fff; text-decoration: none; font-weight: bold;">Visit My Portfolio</a>
          </div>
          
          <p style="text-align: center; margin-top: 10px;">You can also chat with me on <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" style="color: #25D366; text-decoration: none;">WhatsApp</a>.</p>
        </div>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
