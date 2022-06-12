import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import * as Express from 'express';
import { createServer } from 'http';
import * as dotenv from 'dotenv';
import moviesDatas from './datas';

dotenv.config();

// Schema
const schema = gql`
    type Movie {
        title: String
        year: Int
    }

    type Query {
        movie: [Movie]
    }
`;

// resolvers
const resolvers = {
    Query: {
        movie: () => moviesDatas,
    },
};

const { PORT } = process.env;

const LaunchServer = async () => {
    // Create server with express
    const app = Express();
    const httpServer = createServer(app);

    // Init apollo server
    const server = new ApolloServer({
        typeDefs: schema,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        csrfPrevention: true,
        context: () => ({ movies: moviesDatas }),
    });

    await server.start();
    server.applyMiddleware({ app, path: '/' });

    // run a web server
    await new Promise<void>((resolve) => {
        httpServer.listen({ port: PORT }, resolve);
    });

    return `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`;
};

LaunchServer()
    .then((response) => {
        console.log(response);
    })
    .catch(() => {
        throw new Error('Something bad happened...');
    });
