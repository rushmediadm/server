import express, { Request, Response } from "express";
// import { graphqlHTTP } from "express-graphql";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./Schema";
import cors from "cors";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
      const app = express();
      app.use(cors());

      app.use(express.json());

      app.use(express.static('public'));

      const server = new ApolloServer({
        schema,
        introspection: true, 
        playground: true,
      } as any);

      await server.start();
  
      server.applyMiddleware({ app, path: "/graphql" });

      // app.use(
      //   "/graphql",
      //   graphqlHTTP({
      //     schema,
      //     graphiql: true,
      //   })
      // );

      app.get('/', (_req: Request, res: Response) => {
        return res.send('Express Typescript on Vercel!');
      });

      app.get('/ping', (_req: Request, res: Response) => {
        return res.send('pong 🏓');
      });

      app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
      });
  })
  .catch((error) => console.log("Error: ", error))

