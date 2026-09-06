// pages/api/subscribe.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "opalmorsel@gmail.com", // aapka email
        pass: process.env.shivopalmorsel05, 
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "opalmorsel@gmail.com",
      subject: "New Subscription",
      text: `New subscriber email: ${email}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email" });
  }
}
