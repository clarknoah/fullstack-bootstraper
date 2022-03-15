import express from "express";
import cors from "cors";
import { ApolloServer, UserInputError, gql } from "apollo-server-express";
import  { Neo4jGraphQL } from "@neo4j/graphql";
import { OGM } from "@neo4j/graphql-ogm";
import neo4j from "neo4j-driver";
import { env } from "config/globals";
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import * as TypeGraphQL from "type-graphql";
import { UserResolver } from "resources/User/User.resolver";
import { PostResolver } from "resources/Post/Post.resolver";
import { printSchemaWithDirectives } from "@graphql-tools/utils";
import { lexicographicSortSchema } from "graphql";
import { User } from "resources/User/User.entity"
import { Post } from "resources/Post/Post.entity";


export class Server{

    public ogm: OGM | undefined;

    private async initializeSchema(){
      console.log(__dirname);
    const schema = await TypeGraphQL.buildSchema({
        resolvers:[
          UserResolver,
          PostResolver
        ],
        orphanedTypes: [User, Post]
       // orphanedTypes: [__dirname + "../resources/**/*.resolver.{ts,js}", __dirname + "/resolvers/**/*.{ts,js}"]
      })

    const { resolvers } = await TypeGraphQL.buildTypeDefsAndResolvers({
        resolvers:[
          UserResolver,
          PostResolver
        ]
      })
      try {
        const stringDefs = printSchemaWithDirectives(lexicographicSortSchema(schema));
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
    
    public async startServer(){
        const app = express();
  

        const driver = neo4j.driver(
          env.DB_URI,
          neo4j.auth.basic(env.DB_USER, env.DB_PASSWORD)
        );
        const { typeDefs, resolvers } = await this.initializeSchema();

        const ogm = new OGM({ typeDefs, resolvers, driver });
        ogm.init();
 
        const neoSchema:Neo4jGraphQL = await new Neo4jGraphQL({ 
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


       // const clientBuildPath = join(__dirname, "../../../client/build");
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
    
        // handleWebhooks(app);
        await server.start();
        server.applyMiddleware({ app });
    
        // Catch all route for client side react routing
        // app.get("*", (req, res) => {
        //   res.sendFile(join(clientBuildPath, "index.html"));
        // });


        return app;
    }

}