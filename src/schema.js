import { makeExecutableSchema } from 'graphql-tools'

import resolver from './Resolvers/Resolver'
import types from './Types/Types'

export default makeExecutableSchema({
  typeDefs: types,
  resolvers: resolver,
})
