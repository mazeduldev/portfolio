import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const senderEmail = process.env.SENDER_EMAIL;
  const senderPassword = process.env.SENDER_PASSWORD;
  const receiverEmail = process.env.RECEIVER_EMAIL;

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
