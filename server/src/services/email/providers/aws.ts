import AWS from "aws-sdk";
import { env } from "config/globals";
import { EnvVars } from "config/globals";
import { SendEmailRequest } from "aws-sdk/clients/ses";
import { EmailContent } from "../email";
import { EmailServiceInterface } from "../email";


var params: SendEmailRequest = {
    Destination: { /* required */
        ToAddresses: []
    },
    Source: 'no-reply@intelligent-learning.tech', /* required */
    ReplyToAddresses: [
        'noah.clark@workforceedge.com',
    ],
    Message: { /* required */
        Body: { /* required */
            Html: {
                Charset: "UTF-8",
                Data:"",
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Good Luck Booboo'
        },
    }
};

export class AmazonEmailService implements EmailServiceInterface {
    private _ses: AWS.SES;
    public config: EnvVars["AWS"];

    constructor() {
        AWS.config = new AWS.Config();
        AWS.config.update({
            region: env.AWS.REGION,
            apiVersion: '2010-12-01',
            signatureVersion: "v4",
            accessKeyId: env.AWS.ACCESS_KEY_ID,
            secretAccessKey: env.AWS.SECRET_ACCESS_KEY,
        });
        this._ses = new AWS.SES();
        this.config = env.AWS;
    }

    public async sendEmail(content: EmailContent): Promise<void> {
        const { title, body, to, from } = content;
        params.Message.Subject.Data = title;
        params.Message.Body.Html!.Data= body;
        params.Destination.ToAddresses = to;
        params.Source = from!;
        this._ses.sendEmail(params).promise()
    }
}


// const ses = new AmazonEmailService();

// ses.sendEmail();



