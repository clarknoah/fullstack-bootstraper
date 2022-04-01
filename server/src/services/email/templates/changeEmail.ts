import { env } from "config/globals"
type ChangeEmailVariables = {
    token: string;
}

export const changeEmailTemplate = (vars: ChangeEmailVariables) =>{
    const { token }  = vars;

    const title = `
    Please verify your email change
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
        <h1>Please verify your email change</h1>
        <a>${token}</a>
        <a href="${env.FRONTEND_URL}/email-verification/${token}">${token}</a>
    </body>
    </html>
    `;

    return {title, body};
}