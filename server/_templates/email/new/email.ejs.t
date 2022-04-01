---
to: src/services/email/templates/<%= h.changeCase.lcFirst(name) %>.ts
---
import { env } from "config/globals"
type <%= name %>Variables = {
    email: string;
    token: string;
}

export const <%= h.changeCase.lcFirst(name) %>Template = (vars: <%= name %>Variables) =>{
    const { email }  = vars;

    const title = `
    <%= title %>
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
        <h1><%= title %></h1>
    </body>
    </html>
    `;

    return {title, body};
}