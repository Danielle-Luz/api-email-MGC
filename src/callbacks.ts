import { Request, Response } from "express";
import { emailSender } from "./emailConfig";

export const sendDataToEmail = (request: Request, response: Response) => {
  let status = 200;
  const infoMessage = { message: "Email enviado com sucesso" };

  try {
    const emailData = request.body;

    emailSender.send(emailData);
  } catch (error) {
    const errorObj = error as any;

    infoMessage.message = "Erro ao enviar o email";
    status = 400;

    console.log(errorObj.stack);
  }

  return response.status(status).send(infoMessage);
};
