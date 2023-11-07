const userTypeDefs = `
type User {
    firstName: String!
    lastName: String!
    email: String!
    address: String!
    phoneNumber: String!
    password: String!
    confirmPassword: String!

    orderedProducts: [OrderedProducts]
    rentedProducts: [RentedProducts]
}
`;

export default userTypeDefs;
