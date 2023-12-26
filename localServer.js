import { createApp } from './index.js'
import { MovieModel } from './models/local-file-system/movieModels.js'

createApp({ movieModel: MovieModel })
