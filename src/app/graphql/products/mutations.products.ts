const productMutations = `
#graphql mutations
addProduct(title: String!, categories: [String]!, description: String!, price: String!, rentalAmount: String!, rentalPeriod: String!,userEmail: String!): Product
`;
export default productMutations;
