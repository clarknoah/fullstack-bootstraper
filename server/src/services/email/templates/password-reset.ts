
type PasswordResetVariables = {
    email: string;
    token: string;
}


export const passwordResetTemplate = (vars: PasswordResetVariables) =>{
    const title = `
    Password Reset Details Enclosed
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
        <h1>Password Reset</h1>
        <p>Click the link below to reset your password</p>
        <a href="${process.env.FRONTEND_URL}/reset-password/${process.env.REFRESH_JWT_TOKEN_SECRET}">Reset Password</a>
    </body>
    </html>
    `;

    return {title, body}
}