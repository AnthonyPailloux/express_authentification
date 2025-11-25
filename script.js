import { testConnection, pool } from "./src/db/index.js";

try {
    await testConnection();
    await pool.end();
    console.log('tout est pret pour lancer le server');
    process.exit(0)
    
} catch(error) {
    console.error('connexion impossible', error);
    process.exit(1);
} 
    
