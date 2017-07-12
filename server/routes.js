import { graphqlExpress } from 'graphql-server-express'

import schema from './src/schema'

// export routes
const routes = (app) => {
  app.get('/', (req, res) => {
    res.send({ hi: 'Hello World' })
  })

  app.use('/graphql', graphqlExpress(({ query: { query }, body }) => {
    const q = query || body.query
    if (q && q.length > 2000) {
      throw new Error('Query too large')
    }

    return { schema }
  }))
}

export default routes
