import { createApp } from './index.js'
import { MovieModel } from './models/mysql/movieModels.js'

createApp({ movieModel: MovieModel })
