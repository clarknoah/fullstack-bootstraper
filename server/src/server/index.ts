import express from "express";
import cors from "cors";
import { ApolloServer, UserInputError, gql } from "apollo-server-express";
import { env } from "config/globals";

console.log(env);
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'worldzzz',
  },
};
export class Server{
    
    public async startServer(){
        const app = express();

        const server = new ApolloServer({
            typeDefs,
            resolvers
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