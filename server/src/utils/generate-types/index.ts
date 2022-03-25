import "reflect-metadata";
import "module-alias/register"
import { OGM, generate } from "@neo4j/graphql-ogm";
import * as neo4j from "neo4j-driver"
import * as path from "path"
import { initializeSchema } from "src/server";
import { env } from "config/globals";






async function main() {
    // Only generate types when you make a schema change
    const driver = neo4j.driver(
        env.DB_URI,
        neo4j.auth.basic(env.DB_USER, env.DB_PASSWORD)
      );

      const { typeDefs, resolvers } = await initializeSchema();

      const ogm = new OGM({ typeDefs, resolvers, driver });

      const outFile = path.join(__dirname, "../../resources/ogm-types.ts");
      await generate({
        ogm,
        outFile,
    });

    console.log("Types Generated");

    process.exit(0);

}
main()