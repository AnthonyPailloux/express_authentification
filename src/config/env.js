// grace a dotenv 
require('dotenv').config();
// lister et verifier les infos necessaire pour demarrer l'appli

// recuprer les infos de mon fichier .env
module.exports = {
    development:{
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: { decimalNumbers: true},
    define: {underscored: true} 
  }
}