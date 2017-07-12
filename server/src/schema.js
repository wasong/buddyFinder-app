import { merge } from 'lodash'
import fs from 'fs'
import { join } from 'path'
import { makeExecutableSchema } from 'graphql-tools'

import { schema as usersSchema, resolvers as usersResolvers } from './users/schema'
import { getUserById } from './users/store'

const rootSchema = [fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf-8')]

const rootResolvers = {
  Query: {
    user: id => getUserById(id),
    // address: (root, args) => getAddress(args.id),
    // addresses: (root, args) => getAllAddresses(args.address, args.service, args.limit),
  },
}

const schema = [...rootSchema, ...usersSchema]
const resolvers = merge(rootResolvers, usersResolvers)

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

export default executableSchema
