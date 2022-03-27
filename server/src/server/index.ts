import express from "express";
import cors from "cors";
import { ApolloServer, UserInputError, gql } from "apollo-server-express";
import  { Neo4jGraphQL } from "@neo4j/graphql";
import { OGM, generate } from "@neo4j/graphql-ogm";
import neo4j from "neo4j-driver";
import { env } from "config/globals";
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import * as TypeGraphQL from "type-graphql";
import { UserResolver } from "resources/User/user.resolver";
import { PostResolver } from "resources/Post/post.resolver";
import { AuthResolver } from "resources/Auth/auth.resolver";
import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { lexicographicSortSchema } from "graphql";
import { User } from "resources/User/User.entity"
import { Post } from "resources/Post/Post.entity";
import { ModelMap } from "resources/ogm-types"; // this file will be auto-generated using 'generate'
import { join } from "path";
import serveStatic from "express-static-gzip";

export async function initializeSchema(){
  console.log(__dirname);
  const schema = await TypeGraphQL.buildSchema({
      resolvers:[
        UserResolver,
        PostResolver,
        AuthResolver
      ],
      orphanedTypes: [User, Post]
     // orphanedTypes: [__dirname + "../resources/**/*.resolver.{ts,js}", __dirname + "/resolvers/**/*.{ts,js}"]
    })

  const { resolvers } = await TypeGraphQL.buildTypeDefsAndResolvers({
      resolvers:[
        UserResolver,
        PostResolver,
        AuthResolver
      ]
    })
    try {
      let stringDefs = printSchemaWithDirectives(lexicographicSortSchema(schema));
      stringDefs = stringDefs.replace("scalar DateTime", "");
      console.log("Directive Schema\n",stringDefs);
      const typeDefs = gql`
      ${stringDefs}
      `;
      return {resolvers, typeDefs}

    }catch(err){
      console.log("There is a problem syntax error in your schema", err)
      throw "This is all screwed up";
    }
}


export class Server{

    public ogm: OGM | undefined;
    
    public async startServer(){
        const app = express();
  

        const driver = neo4j.driver(
          env.DB_URI,
          neo4j.auth.basic(env.DB_USER, env.DB_PASSWORD)
        );
        const { typeDefs, resolvers } = await initializeSchema();

        const ogm = new OGM<ModelMap>({ typeDefs, resolvers, driver });
        ogm.init();
        
        const neoSchema:Neo4jGraphQL = await new Neo4jGraphQL({ 
            //typeDefs: neoTypes,
            typeDefs, 
            resolvers,
            driver,
            plugins: {
              auth: new Neo4jGraphQLAuthJWTPlugin({
                  secret: env.JWT_TOKEN_SECRET
              })
          }
         })

         const schema = await neoSchema.getSchema();
         await neoSchema.assertIndexesAndConstraints({ options: { create: true }});

 
        const server = new ApolloServer({
            schema,
            context:({req})=>{
              return {
                req,
                user: {},
                ogm: ogm,
                authorization: req?.headers?.authorization
              };
            }
        })


        const clientBuildPath = join(__dirname, "../../../client/dist");
        const storybookBuildPath = join(__dirname, "../../../client/.storybook/dist");

        // TODO: Need to uncomment this, for pandaDoc testing purposes
        // app.use(
        //   redirectToHTTPS(
        //     [/localhost:(\d{4})/, /wfe.com:(\d{4})/, /localtest.me:(\d{4})/],
        //     [],
        //     301
        //   )
        // );
        app.use(cors());
        //app.use(express.static(clientBuildPath));
        app.use(express.json({ limit: "5mb" }));
    
        // const bullUser: any = {};
        // bullUser[process.env.BULL_DASHBOARD_USER!] =
        //   process.env.BULL_DASHBOARD_PASSWORD;
    
        // app.use(
        //   "/admin/queues",
        //   basicAuth({ users: bullUser, challenge: true }),
        //   router
        // );

        app.use(
          serveStatic(clientBuildPath, {
            enableBrotli: true,
            orderPreference: ["br"],
          })
        );
    
        // handleWebhooks(app);
        await server.start();
        server.applyMiddleware({ app });

        app.get("*", (req, res) => {
          res.sendFile(join(storybookBuildPath, "index.html"));
        });

        //Catch all route for client side react routing
        app.get("*", (req, res) => {
          res.sendFile(join(clientBuildPath, "index.html"));
        });


        return app;
    }

}