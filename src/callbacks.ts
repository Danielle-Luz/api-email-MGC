import { Request, Response } from "express";
import { emailSender } from "./emailConfig";

export const sendDataToEmail = async (request: Request, response: Response) => {
  let status = 200;
  const infoMessage = { message: "Email enviado com sucesso" };

  const { to, sender, text } = request.body;
  const formattedEmailText = `
  <b>Enviado por: ${sender}</b>
  <br />
  ${text
    .split("\n")
    .map((paragraph: string) => `<p>${paragraph}</p>`)
    .join("\n")}
  `;
  const emailData = {
    to,
    from: "mailtrap@minhasgrandescriancas.org",
    subject: "Novo e-mail do site do projeto",
    text,
    html: formattedEmailText,
  };

  await emailSender.sendMail(emailData, (error: Error) => {
    if (error) {
      infoMessage.message = "Erro ao enviar o email";
      status = 400;
    }
  });

  return response.status(status).send(infoMessage);
};
