require('dotenv').config();
const { Pool } = require('pg')
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASS,
    database: process.env.PGDB,
    port: process.env.PGPORT,
    allowExitOnIdle: true
})

const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post agregado")
}

const getPosts = async () => {
    const { rows } = await pool.query("SELECT * from posts");
    console.log(rows);
    return rows;
}

module.exports = { agregarPost, getPosts }