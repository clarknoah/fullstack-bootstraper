import express from "express";
import cors from "cors";
import { ApolloServer, UserInputError, gql } from "apollo-server-express";
import  { Neo4jGraphQL } from "@neo4j/graphql";
import { OGM } from "@neo4j/graphql-ogm";
import neo4j from "neo4j-driver";
import { env } from "config/globals";
import { Neo4jGraphQLAuthJWTPlugin } from "@neo4j/graphql-plugin-auth";
import * as TypeGraphQL from "type-graphql";
import { User } from "resources/User/User.entity";
import { UserResolver } from "resources/User/User.resolver";
import { type } from "os";

const neoTypeDefs = gql`
  type User {
    id: ID!
    email: String!
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'worldzzWowz',
  },
  Movie: {
    title: ()=>'LotR'
  }
};



export class Server{

    public ogm: OGM | undefined;

    private async initializeSchema(){
      return await TypeGraphQL.buildTypeDefsAndResolvers({
        resolvers:[
          UserResolver
        ]
      })
      // return await TypeGraphQL.buildSchema({
      //   resolvers:[
      //     UserResolver
      //   ]
      // })
      
    }
    
    public async startServer(){
        const app = express();
  

        const driver = neo4j.driver(
          env.DB_URI,
          neo4j.auth.basic(env.DB_USER, env.DB_PASSWORD)
        );
        const { typeDefs, resolvers } = await this.initializeSchema();
        const ogm = new OGM({ typeDefs, driver });
        
        console.log(neoTypeDefs, typeDefs);
        const schema = await new Neo4jGraphQL({ 
            typeDefs: typeDefs, 
            driver
         }).getSchema();
        const server = new ApolloServer({
            schema,
            context:({req})=>{
              return {
                req,
                user: {},
                em: this.ogm,
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