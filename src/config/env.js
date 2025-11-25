// importer l'outils dotenv 
import dotenv from 'dotenv';
// import { JsonWebTokenError } from 'jsonwebtoken';

dotenv.config();

// lister et verifier les infos necessaire pour demarrer l'appli
const required = ['DB_HOST', 'DB_USER', 'DB_NAME', 'JWT_SECRET'];
for(const key of required) {
    if(!process.env[key]){
        throw new Error(`${key}: manquant dans le fichier .env`);
        
    }
}

// recuprer les infos de mon fichier .env
export const env = {
    port: process.env.PORT ?? 4000,
    db: {
        host: process.env.DB_HOST,
        port: Number (process.env.DB_PORT ?? 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD ?? '',
        database: process.env.DB_NAME,
    
  },
  jwtSecret: process.env.JWT_SECRET
}