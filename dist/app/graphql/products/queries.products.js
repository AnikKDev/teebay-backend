"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productQueries = `
#graphql queries
allProducts: [Product]

productById (id:ID!): Product!

orders (email:String): [OrderedProducts]

rents: [
    RentedProducts
]
`;
exports.default = productQueries;
