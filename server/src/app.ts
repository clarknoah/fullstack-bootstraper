import { config } from "dotenv";
import "reflect-metadata";

config();

console.log(process.env.TEST_VAR);

console.log("Hello World!!!");