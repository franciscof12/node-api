import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  database: 'moviesdb',
  user: 'root'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG
const connection = await mysql.createConnection(connectionString)

export class MovieModel {
  static async getAll ({ genre }) {
    const [movies] = await connection.query('SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie')
    return movies
  }

  static async getById ({ id }) {
    const [movie] = await connection.query('SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN(?)', [id])
    return movie
  }

  static async create ({ input }) {
    // ignore genre from input
    const {
      title,
      year,
      director,
      poster,
      rate,
      duration
    } = input

    // genreate uuid
    const [uuidResult] = await connection.query('SELECT UUID() uuid;')
    const [{ uuid }] = uuidResult
    await connection.query(`INSERT INTO movie (id, title, year, director, duration, poster, rate) VALUES (UUID_TO_BIN("${uuid}"), ?, ?, ?, ?, ?, ?);`, [title, year, director, duration, poster, rate])

    // return movies
    const [movies] = await connection.query(`SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie WHERE id = UUID_TO_BIN("${uuid}")`)
    return movies[0]
  }

  static async delete ({ id }) {
    // delete movie
    await connection.query('DELETE FROM movie WHERE id = UUID_TO_BIN(?)', [id])
    return true
  }

  // todo
  static async update ({ id, input }) {

  }
}
