import AWS from "aws-sdk";
import { env } from "config/globals";
import { EnvVars } from "config/globals";
import { SendEmailRequest } from "aws-sdk/clients/ses";
import { EmailServiceProvider } from "../email";
import { EmailContent } from "../email";
const emailTemplate = `
<div style="max-width: 600px;margin: 0 auto;padding: 20px;display: flex;flex-direction: row;align-items: center;justify-content: center;border: 2px solid black;">
    <h1>Hello World</h1>
    <p>You're gonna do <strong>Amazing!</strong></p>
</div>
`


var params: SendEmailRequest = {
    Destination: { /* required */
        ToAddresses: [
            'noahbc08@gmail.com',
        ]
    },
    Source: 'no-reply@intelligent-learning.tech', /* required */
    ReplyToAddresses: [
        'noah.clark@workforceedge.com',
    ],
    Message: { /* required */
        Body: { /* required */
            Html: {
                Charset: "UTF-8",
                Data: emailTemplate,
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'Good Luck Booboo'
        },
    }
};

export class AmazonEmailService implements EmailServiceProvider {
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
        params.Source = from;
        this._ses.sendEmail(params).promise()
    }
}


// const ses = new AmazonEmailService();

// ses.sendEmail();



