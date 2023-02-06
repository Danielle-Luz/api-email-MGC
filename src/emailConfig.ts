const nodemailer = require('nodemailer');

export const emailSender = nodemailer.createTransport({
  domain: "minhasgrandescriancas.org",
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "c02fe0005a0414c8270a2db43e9f7c1f"
  }
});