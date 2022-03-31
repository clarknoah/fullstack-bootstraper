
import { AmazonEmailService } from "./providers/aws";
import { passwordResetTemplate } from "./templates/password-reset";
import { env } from "config/globals";
export type EmailContent = {
    title: string;
    body: string;
    to: string[];
    from: string;
}

export interface EmailServiceProvider {
    sendEmail: (content: EmailContent) => void;
}


export class EmailService {
    private _api: EmailServiceProvider;

    constructor(serviceProvider: EmailServiceProvider) {
        this._api = serviceProvider;
    }

    public async sendEmail(content: EmailContent): Promise<void> {
        if(env.SEND_MAIL){
            const { title, body, to, from} = content;
            this._api.sendEmail({title, body, to, from});
        }else {
            console.log("Please set SEND_MAIL to true in config/globals.ts");
        }
    }
}

const emailService = new EmailService(new AmazonEmailService());

let emailContent: any = passwordResetTemplate(
    {email: "noahbc08@gmail.com", token: "123"}
    )
emailContent.to = ["noahbc08@gmail.com"];
emailContent.from = "no-reply@intelligent-learning.tech";

emailService.sendEmail(emailContent);