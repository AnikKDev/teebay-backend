import mutations from "./mutations.users";
import queries from "./queries.users";

const typeDefs = `
type Query {
   ${queries}
}
type Mutation {
    ${mutations}
}
`;

export default typeDefs;
