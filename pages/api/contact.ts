import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const senderEmail = process.env.sender_email;
  const senderPassword = process.env.sender_password;
  const receiverEmail = process.env.receiver_email;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: senderEmail,
      pass: senderPassword,
    },
    secure: true,
  });

  const mailData = {
    from: senderEmail,
    to: receiverEmail,
    subject: `[Portfolio] message from ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <div>${req.body.message.replace(/\n/g, "<br>")}</div>
      <p>Sent from: ${req.body.email}</p>
    `,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Something went wrong!" });
    } else {
      console.log(info);
      res.status(200).json({ message: "Thanks for the message!" });
    }
  });
};
