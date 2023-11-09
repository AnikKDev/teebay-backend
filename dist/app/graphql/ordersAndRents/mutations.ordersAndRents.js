"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ordersAndRentsMutations = `
#graphql mutations
createOrder(productId:ID!, userEmail:String!): OrderedProducts
createRent(productId:ID!, userEmail:String!): RentedProducts
`;
exports.default = ordersAndRentsMutations;
