import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { buildSchemaSync } from 'type-graphql';
import * as Express from 'express';
import { createServer } from 'http';
import * as dotenv from 'dotenv';

dotenv.config();

// prisma client
const prisma = new PrismaClient();

const { PORT } = process.env;

const LaunchServer = async () => {
    // Create server with express
    const app = Express();
    const httpServer = createServer(app);

    const schema = buildSchemaSync({
        resolvers: [`${__dirname}/**/*.resolver.{ts,js}`],
    });

    // Init apollo server
    const server = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        csrfPrevention: true,
        context: () => ({ prisma }),
    });

    await server.start();
    server.applyMiddleware({ app, path: '/' });

    // run a web server
    await new Promise<void>((resolve) => {
        httpServer.listen({ port: PORT }, resolve);
    });

    console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
};

LaunchServer();
