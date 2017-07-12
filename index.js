// entry point for application
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'

import log from './log'
import routes from './routes'
import config from './config'

const app = express()
const { port, env } = config

// app setup
// middleware setup
app.use(bodyParser.json())
app.use(morgan('combined')) // TODO: configure later

// db setup
mongoose.Promise = global.Promise
mongoose.connect(config.db, { useMongoClient: !!1 })
mongoose.connection.on('error', () => {
  log.fatal('unable to connect to mongodb')
})

routes(app)

app.listen(port, () => {
  log.info('🌚  api started 🚀 ', { port, env })
})
