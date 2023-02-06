import { NextFunction, Request, Response } from "express";
import { iEmailData } from "./interfaces";

export namespace middlewares {
  const rightEmailDataModel: iEmailData = {
    to: "",
    sender: "",
    text: "",
    data: "",
    telefone: ""
  };

  export const checkEmailRequestTypes = (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { body: emailRequestData } = request;
    const emailRequestKeys = Object.keys(emailRequestData);

    const hasWrongTypes = !emailRequestKeys.every(
      (requestKey) => typeof emailRequestData[requestKey] === "string"
    );

    if (hasWrongTypes) {
      const errorMessage = {
        message: "Todas as propriedades devem ser do tipo string",
      };

      response.status(400).send(errorMessage);
    }

    next();
  };

  export const checkEmailRequestKeys = (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { body: emailRequestData } = request;

    const emailRequestKeys = Object.keys(emailRequestData);
    const emailRightKeys = Object.keys(rightEmailDataModel);
    const hasWrongKeys = emailRequestKeys.filter(
      (rightKey) => !emailRightKeys.includes(rightKey)
    );

    if (
      hasWrongKeys.length > 0 ||
      emailRightKeys.length !== emailRequestKeys.length
    ) {
      const errorMessage = {
        message: `As chaves necessárias no corpo da requisição são: ${emailRightKeys.join(
          ", "
        )}`,
      };

      return response.status(400).send(errorMessage);
    }

    next();
  };
}
