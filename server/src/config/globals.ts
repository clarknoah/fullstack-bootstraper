import { config } from "dotenv";
config();

enum Environment { 
    PROD = "production",
    DEV = "development",
    STAGE = "staging"
}


type EnvVars = {
    NODE_ENV: string;
    PORT: string;
}
console.log(process.env.TEST_VAR)

export const env:EnvVars = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT:"3331"
}
