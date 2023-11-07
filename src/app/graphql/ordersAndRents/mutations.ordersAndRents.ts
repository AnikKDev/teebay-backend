const ordersAndRentsMutations = `
#graphql mutations
createOrder(productId:ID!, userEmail:String!): OrderedProducts
createRent(productId:ID!, userEmail:String!): RentedProducts
`;
export default ordersAndRentsMutations;
