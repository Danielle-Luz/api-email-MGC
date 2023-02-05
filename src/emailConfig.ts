export const emailSender = require('@sendgrid/mail');

const emailApiKey = "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";

emailSender.setApiKey(emailApiKey);
