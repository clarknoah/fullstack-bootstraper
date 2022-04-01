
import { AmazonEmailService } from "./providers/aws";
import { passwordResetTemplate } from "./templates/password-reset";
import { env } from "config/globals";
export type EmailContent = {
    title: string;
    body: string;
    to: string[];
    from?: string;
}

export interface EmailServiceInterface {
    sendEmail: (content: EmailContent) => void;
}


export class EmailService {
    private _api: EmailServiceInterface;

    constructor() {
        this._api = new AmazonEmailService();
    }

    public async sendEmail(content: EmailContent): Promise<void> {
        if(env.SEND_EMAIL){
            const { title, body, to, from} = content;
            const source = from || env.FROM_EMAIL;
            this._api.sendEmail({title, body, to, from: source});
        }else {
            console.log("Please set SEND_MAIL to true in config/globals.ts");
        }
    }
}