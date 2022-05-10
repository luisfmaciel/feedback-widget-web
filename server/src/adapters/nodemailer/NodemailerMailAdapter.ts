import nodemailer from "nodemailer";
import { MailAdapter, SendEmailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9cadb8b3f2ee12",
    pass: "5ecab521e791fa"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  
  async sendMail({ subject, body }: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Luis Felipe <luisfmaciel@live.com>',
      subject,
      html: body,
    });
  }
}