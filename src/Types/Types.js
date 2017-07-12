const typeDefs = `
  type User {
    id: Int!
    firstName: String
    lastName: String
  }

  #Query
  type Query {
    users: [User]
    user(firstName: String): User
  }

  #Mutation
`

export default typeDefs
