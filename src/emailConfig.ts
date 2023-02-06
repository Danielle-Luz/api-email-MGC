const nodemailer = require('nodemailer');

export const emailSender = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  }
});