import mysql from 'mysql2/promise';
import { env } from '../config/env.js';

export const pool = mysql.createPool({
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.database,
    // limite Jusqu'a 10 connection simultanée
    connectionLimit: 10,
});

// test en affichant l'heure
export async function testConnection() {
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log('conecter à mysql à :' , rows[0].now);

}