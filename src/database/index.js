const { Pool } = require('pg');

const DATABASE_HOST = process.env.PGHOST //|| 'postgresql-dev-mt.alwaysdata.net';
const DATABASE_USER = process.env.PGUSER //|| 'megadave';
const DATABASE_PASSWORD = process.env.PGPASSWORD //|| 'megadaveaxl.2022';
const DATABASE_NAME = process.env.PGDATABASE //|| 'megadave_softjobs';
const DATABASE_PORT = process.env.PGPORT //|| '5432';

const pool = new Pool({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    port: DATABASE_PORT,
    allowExitOnIdle: true
});

module.exports = pool;
