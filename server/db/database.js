const {Pool} = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'wizardtavern',
    password: 'Envious64!',
    port: 5432
});
module.exports = pool;