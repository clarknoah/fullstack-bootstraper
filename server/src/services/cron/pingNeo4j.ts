import { initializeNeo4j } from "../../server";
import { CronJob } from "cron";
import neo4j from "neo4j-driver";

export const pingNeo4j = async () => {
    const { driver } = await initializeNeo4j();
    return new CronJob(
        "1 * * * * *",
        async () => {
          try {
            console.log("Run Ever");
            console.log("Start Query: ",new Date())
            let query = await driver.session({defaultAccessMode: neo4j.session.READ})
            let users = await query.run(`
              MATCH (u:User)
              RETURN u`);

              console.log("End Query: ",new Date())
              console.log(users.records.length);
          } catch (error: any) {
            console.log(error?.message);
            console.log(error);
          }
        },
        null,
        true,
        "America/New_York"
      ).start();
}