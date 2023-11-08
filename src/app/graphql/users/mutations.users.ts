const mutations = `
#graphql mutations
signUp(firstName: String, lastName: String, email: String, password: String!, address:String!, phoneNumber:String!, confirmPassword: String): User
signIn(email: String!, password: String!): User
`;
export default mutations;
