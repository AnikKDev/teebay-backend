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

export default userTypeDefs;
