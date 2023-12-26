import { createApp } from './app.js'
import { MovieModel } from './models/mysql/movieModels.js'

createApp({ movieModel: MovieModel })
