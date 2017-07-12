// example data
const users = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
]

const resolvers = {
  Query: {
    users: () => users,
    user: (_, { firstName }) => users.find(i => i.firstName === firstName),
  },
}

export default resolvers
