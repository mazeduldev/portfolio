"use server";
import { createTransport } from "nodemailer";

const senderEmail = process.env.SENDER_EMAIL;
const senderPassword = process.env.SENDER_PASSWORD;
const receiverEmail = process.env.RECEIVER_EMAIL;

function isSingleWord(message: string): boolean {
  const trimmedMessage = message.trim();
  return (
    trimmedMessage.split(" ").length <= 1 &&
    trimmedMessage.split("\n").length <= 1
  );
}

export async function sendEmail(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ error: string | null; message: string | null }> {
  if (isSingleWord(data.message)) {
    console.log(`Single word message: ${JSON.stringify(data)}`);
    return { error: null, message: "Thanks for the message!" };
  }

  const transporter = createTransport({
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
    subject: `[Portfolio] ${data.name}`,
    text: data.message + " | Sent from: " + data.email,
    html: `
      <div>${data.message.replace(/\n/g, "<br>")}</div>
      <p>Sent from: ${data.email}</p>
    `,
  };

  try {
    await transporter.sendMail(mailData);
    return { error: null, message: "Thanks for the message!" };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong!", message: null };
  }
}
