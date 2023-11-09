# TeeBay Backend API Documentation

This section provides detailed documentation for the API's, including available queries and mutations to interact with the product and user data.

## Mutations

Mutations are used to modify data. Here are the mutations available in this API:

### `addProduct`

Adds a new product to the catalog.

```graphql
mutation addProduct(
  $title: String!,
  $categories: [String]!,
  $description: String!,
  $price: String!,
  $rentalAmount: String!,
  $rentalPeriod: String!,
  $userEmail: String!
) {
  addProduct(
    title: $title,
    categories: $categories,
    description: $description,
    price: $price,
    rentalAmount: $rentalAmount,
    rentalPeriod: $rentalPeriod,
    userEmail: $userEmail
  ) {
    id
    title
    // ... other product fields
  }
}
```

### `signUp`

Registers a new user with the provided information.

```graphql
mutation signUp(
  $firstName: String,
  $lastName: String,
  $email: String,
  $password: String!,
  $address:String!,
  $phoneNumber:String!,
  $confirmPassword: String
) {
  signUp(
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    password: $password,
    address: $address,
    phoneNumber: $phoneNumber,
    confirmPassword: $confirmPassword
  ) {
    id
    email
    // ... other user fields
  }
}
```

### `signIn`

Authenticates a user and returns user information for a valid email and password combination.

```graphql
mutation signIn(
  $email: String!,
  $password: String!
) {
  signIn(
    email: $email,
    password: $password
  ) {
    id
    email
    // ... other user fields
  }
}
```

## Queries

Queries are used to retrieve data. Here are the queries you can perform:

### `allProducts`

Retrieves a list of all products.

```graphql
query {
  allProducts {
    id
    title
    // ... other product fields
  }
}
```

### `productById`

Retrieves a single product by its ID.

```graphql
query productById($id: ID!) {
  productById(id: $id) {
    id
    title
    // ... other product fields
  }
}
```

### `orders`

Retrieves a list of ordered products by a user's email.

```graphql
query orders($email: String) {
  orders(email: $email) {
    id
    // ... other ordered product fields
  }
}
```

### `rents`

Retrieves a list of rented products.

```graphql
query {
  rents {
    id
    // ... other rented product fields
  }
}
```

### `userByEmail`

Retrieves a user's information by their email.

```graphql
query userByEmail($email: String!) {
  userByEmail(email: $email) {
    id
    email
    // ... other user fields
  }
}
```

## Types

Here's a brief overview of the main types used in the queries and mutations:

### `Product`

- `id`: The unique identifier for the product.
- `title`: The title of the product.
- `categories`: A list of categories the product belongs to.
- `description`: A detailed description of the product.
- `price`: The price of the product.
- `rentalAmount`: The amount for renting the product.
- `rentalPeriod`: The period for which the product can be rented.
- `userEmail`: The email of the user who owns the product.

### `User`

- `id`: The unique identifier for the user.
- `firstName`: The user's first name.
- `lastName`: The user's last name.
- `email`: The user's email address.
- `password`: The user's password (not returned in queries for security reasons).
- `address`: The user's address.
- `phoneNumber`: The user's phone number.

## Running the Project Without Docker

Follow these steps to get the project running without Docker:

```bash
# Install dependencies
npm install
# or
yarn

# Run migrations
npx prisma migrate dev
# or
npm run migrate
# or
yarn prisma migrate dev
# or
yarn migrate

# Start the development server
npm run dev
# or
yarn dev
```

## Running the Project With Docker

To get started with Docker,

```bash
docker build -t teebay_backend .

# Run the container
docker run -p 8000:8000 teebay_backend
```
