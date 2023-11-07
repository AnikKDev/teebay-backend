import { ApolloServer } from "@apollo/server";
import mutations from "./users/mutations.users";
import queries from "./users/queries.users";
import resolvers from "./users/resolvers.users";
import typeDefs from "./users/typeDef.users";

async function createApolloServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
    ${typeDefs}
    type Query {
      ${queries}
   }
   type Mutation {
       ${mutations}
   }
    `, //schema here
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
