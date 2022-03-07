import "dotenv/config";

enum Environment { 
    PROD = "production",
    DEV = "development",
    STAGE = "staging"
}


type EnvVars = {
    NODE_ENV: string;
    PORT: string;
    DB_USER:string;
    DB_PASSWORD: string;
    DB_URI: string;

}

export const env:EnvVars = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT:process.env.DB_PORT || "3331",
    DB_USER:process.env.DB_USER!,
    DB_PASSWORD:process.env.DB_PASSWORD!,
    DB_URI: process.env.DB_URI!
}
