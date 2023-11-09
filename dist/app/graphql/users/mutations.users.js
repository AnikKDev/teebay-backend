"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mutations = `
#graphql mutations
signUp(firstName: String, lastName: String, email: String, password: String!, address:String!, phoneNumber:String!, confirmPassword: String): User
signIn(email: String!, password: String!): User
`;
exports.default = mutations;
