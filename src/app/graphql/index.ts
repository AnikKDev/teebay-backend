import { ApolloServer } from "@apollo/server";
import resolvers from "./users/resolvers.users";
import typeDefs from "./users/typeDef.users";

async function createApolloServer() {
  const gqlServer = new ApolloServer({
    typeDefs, //schema here
    resolvers: {
      Query: {
        ...resolvers.queries,
      },
      Mutation: { ...resolvers.mutations },
    },
  });
  await gqlServer.start();
  return gqlServer;
}

export default createApolloServer;
