import { ApolloServer } from "@apollo/server";
import productMutations from "./products/mutations.products";
import productResolvers from "./products/resolvers.products";
import produtTypeDefs from "./products/typeDefs.products";
import mutations from "./users/mutations.users";
import queries from "./users/queries.users";
import userResolvers from "./users/resolvers.users";
import userTypeDefs from "./users/typeDef.users";

async function createApolloServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
    ${userTypeDefs}
    ${produtTypeDefs}
    type Query {
      ${queries}
   }
   type Mutation {
       ${mutations}
       ${productMutations}
   }
    `, //schema here
    resolvers: {
      Query: {
        ...userResolvers.queries,
      },
      Mutation: { ...userResolvers.mutations, ...productResolvers.mutations },
    },
  });
  await gqlServer.start();
  return gqlServer;
}

export default createApolloServer;
