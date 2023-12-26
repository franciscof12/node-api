import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { createMoviesRouter } from './routes/movies.js'

export const createApp = ({ movieModel }) => {
  const app = express()
  app.use(express.json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')
  app.use('/movies', createMoviesRouter({ movieModel }))

  const PORT = process.env.PORT ?? 1234

  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })
}
