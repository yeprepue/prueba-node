const { Pool } = require('pg');


const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    hot: 'localhost',
    port: 5432,
    database: 'pruebadb'

}); 

module.exports = pool; 
