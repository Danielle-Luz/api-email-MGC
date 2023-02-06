import { Request, Response } from "express";
import { emailSender } from "./emailConfig";

export const sendDataToEmail = async (request: Request, response: Response) => {
  let status = 200;
  const infoMessage = { message: "Email enviado com sucesso" };

  const emailData = request.body;

  await emailSender.sendMail(emailData, (error: Error) => {
    if (error) {
      infoMessage.message = "Erro ao enviar o email";
      status = 400;
    }
  });

  return response.status(status).send(infoMessage);
};
