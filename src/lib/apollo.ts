import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { Server } from "http";
import { Application } from "express";
import typeDefs from "../graphql/typedefs";
import resolvers from "../graphql/resolvers";

export default async function startApollo(server: Server, app: Application) {
  const s = new ApolloServer({
    typeDefs,
    resolvers,
    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer: server }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true, footer: true }),
    ],
  });
  await s.start();
  s.applyMiddleware({ app: app as any, path: "/graphql" });
}
