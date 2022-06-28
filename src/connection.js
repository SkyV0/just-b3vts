const { builtinModules } = require('module')
const {Client} = require('pg')

const client  = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "toor",
    database: "my_database"
})

module.exports = client