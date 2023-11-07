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
    product: Product
    user: User
}
type RentedProducts {
    productId: String
    userEmail: String
    product: Product
    user: User
}

`;

export default produtTypeDefs;
