const productQueries = `
#graphql queries
allProducts: [Product]

productById (id:ID!): Product!

allOrderedProducts: [
    OrderedProducts
]

allRentedProducts: [
    RentedProducts
]
`;
export default productQueries;
