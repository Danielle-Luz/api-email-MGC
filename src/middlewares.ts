import { NextFunction, Request, Response } from "express";
import { iEmailData } from "./interfaces";

export namespace middlewares {
  const rightEmailDataModel: iEmailData = {
    to: "",
    from: "",
    subject: "",
    text: "",
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

    const hasWrongKeys = !emailRightKeys.every((rightKey) =>
      emailRequestKeys.includes(rightKey)
    );

    if (hasWrongKeys) {
      const errorMessage = {
        message: `As chaves permitidas no corpo da requisição são: ${emailRequestKeys.join(
          ", "
        )}`,
      };

      response.status(400).send(errorMessage);
    }

    next();
  };
}
