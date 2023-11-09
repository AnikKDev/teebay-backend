"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTypeDefs = `
type User {
    firstName: String!
    lastName: String!
    email: String!
    address: String!
    phoneNumber: String!
    password: String!
    confirmPassword: String

    orders: [OrderedProducts!]
    rents: [RentedProducts!]
    products: [Product!]
}
`;
exports.default = userTypeDefs;
