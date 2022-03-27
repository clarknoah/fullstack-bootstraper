import fetch from "node-fetch";
import { CronJob } from "cron";


export const pingHeroku = async () => {
    return new CronJob(
        "1 * * * * *",
        async () => {
          try {
            console.log("Pinging Server to keep Heroku Up");
            const results = await fetch("https://intelligent-learning.tech", {
              method: "GET"})
            console.log("Heroku Ping Status: ", results.status);
            
          } catch (error: any) {
            console.log("every 5 minutes.");
            console.log(error?.message);
            console.log(error);
          }
        },
        null,
        true,
        "America/New_York"
      ).start();
    }