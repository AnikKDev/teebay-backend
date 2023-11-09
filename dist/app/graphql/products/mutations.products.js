"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productMutations = `
#graphql mutations
addProduct(title: String!, categories: [String]!, description: String!, price: String!, rentalAmount: String!, rentalPeriod: String!,userEmail: String!): Product
`;
exports.default = productMutations;
