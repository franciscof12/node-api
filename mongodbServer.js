import { createApp } from './app.js'
import { MovieModel } from './models/mongodb/movieModels.js'

createApp({ movieModel: MovieModel })
