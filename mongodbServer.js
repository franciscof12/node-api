import { createApp } from './index.js'
import { MovieModel } from './models/mongodb/movieModels.js'

createApp({ movieModel: MovieModel })
