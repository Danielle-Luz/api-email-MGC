import { iEmailData } from './interfaces';
import { emailSender } from "./emailConfig";

export const sendDataToEmail = (request: Request, response: Response) => {
  const {body: emailData} = request;

  const message: iEmailData = {
    to: 'danisolada@gmail.com',
    from: 'daniln2209@gmail.com',
    subject: 'Assunto do Email',
    text: 'Conteúdo do Email em texto puro',
    html: '<p>Conteúdo do Email em HTML</p>',
  };
  
  emailSender.send(message);
}