const nodemailer = require('nodemailer');

export const emailSender = nodemailer.createTransport({
  domain: process.env.DOMAIN,
  host: process.env.HOST,
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  }
});