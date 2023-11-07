const productQueries = `
#graphql queries
allProducts: [Product]

productById (id:ID!): Product!

orders (email:String): [OrderedProducts]

rents: [
    RentedProducts
]
`;
export default productQueries;
