import "dotenv/config";

enum Environment { 
    PROD = "production",
    DEV = "development",
    STAGE = "staging"
}

type JwtToken = {
    issuer: string;
    subject: string;
    audience: string;
    expiresIn: string;
}


type EnvVars = {
    NODE_ENV: string;
    PORT: string;
    DB_USER:string;
    DB_PASSWORD: string;
    DB_URI: string;
    JWT_TOKEN_SECRET: string;
    REFRESH_JWT_TOKEN_SECRET:string;
    JWT_TOKEN:JwtToken;
    REFRESH_JWT_TOKEN: JwtToken;
}

export const env:EnvVars = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT:process.env.DB_PORT || "3331",
    DB_USER:process.env.DB_USER!,
    DB_PASSWORD:process.env.DB_PASSWORD!,
    DB_URI: process.env.DB_URI!,
    JWT_TOKEN_SECRET: process.env.JWT_TOKEN_SECRET!,
    REFRESH_JWT_TOKEN_SECRET: process.env.REFRESH_JWT_TOKEN_SECRET!,
    JWT_TOKEN: {
        issuer: process.env.JWT_TOKEN_ISSUER || "",
        subject: process.env.JWT_TOKEN_SUBJECT || "",
        audience: process.env.JWT_TOKEN_AUDIENCE || "",
        expiresIn: process.env.JWT_TOKEN_TTL! || "15m"
      },
      REFRESH_JWT_TOKEN: {
        issuer: process.env.REFRESH_JWT_TOKEN_ISSUER || "",
        subject: process.env.REFRESH_JWT_TOKEN_SUBJECT || "",
        audience: process.env.REFRESH_JWT_TOKEN_AUDIENCE || "",
        expiresIn: process.env.REFRESH_JWT_TOKEN_TTL! || "1h"
      }
}
