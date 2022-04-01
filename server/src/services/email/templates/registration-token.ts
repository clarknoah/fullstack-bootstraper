import { env } from "config/globals"
type RegisterationTokenVariables = {
    email: string;
    token: string;
}


export const registrationTokenTemplate = (vars: RegisterationTokenVariables) =>{
    const { email, token } = vars;
    const url = `${env.FRONTEND_URL}/register/${token}`;
    const title = `
    Please verify your email to complete ${env.APP_NAME} registration!
    `
    const body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Email Verification</h1>
        <p>Click the link below to verify your email</p>
        <a href="${url}">Verify Email</a>
        <p>${url}</p>
    </body>
    </html>
    `;

    return {title, body};
}