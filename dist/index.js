"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { graphqlHTTP } from "express-graphql";
const apollo_server_express_1 = require("apollo-server-express");
const Schema_1 = require("./Schema");
const cors_1 = __importDefault(require("cors"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    // app.use( cors({ origin: "http://localhost:3000", methods: "GET,POST,PUT,DELETE", credentials: true, }) );
    app.use(express_1.default.json());
    app.use(express_1.default.static('public'));
    const server = new apollo_server_express_1.ApolloServer({
        schema: Schema_1.schema,
        introspection: true,
        playground: true,
    });
    yield server.start();
    server.applyMiddleware({ app, path: "/graphql" });
    // app.use(
    //   "/graphql",
    //   graphqlHTTP({
    //     schema,
    //     graphiql: true,
    //   })
    // );
    app.get('/', (_req, res) => {
        return res.send('Express Typescript on Vercel!');
    });
    app.get('/ping', (_req, res) => {
        return res.send('pong 🏓');
    });
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001");
    });
}))
    .catch((error) => console.log("Error: ", error));
//# sourceMappingURL=index.js.map