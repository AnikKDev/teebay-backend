const produtTypeDefs = `
type Product {
    title: String!
    categories: [String]!
    description: String!
    price: String!
    rentalAmount: String!
    rentalPeriod: String!
}
type OrderedProducts {
    productId: String
    userEmail: String
}
type RentedProducts {
    productId: String
    userEmail: String
}

`;

export default produtTypeDefs;
