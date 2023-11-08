const produtTypeDefs = `
type Product {
    id: ID!
    title: String!
    categories: [String]!
    description: String!
    price: String!
    rentalAmount: String!
    rentalPeriod: String!
    userEmail: String!
}
type ProductById {
    id: ID!
    title: String!
    categories: [String]!
    description: String!
    price: String!
    rentalAmount: String!
    rentalPeriod: String!
    createdAt: String
    
}
type OrderedProducts {
    id: ID!
    productId: String
    userEmail: String
    #the problem with the below relation
    
    product: ProductById
    user: User
}
type RentedProducts {
    id: ID!
    productId: String
    userEmail: String
    product: ProductById
    user: User
}

`;

export default produtTypeDefs;
