// Import du module mysql2/promise pour utiliser MySQL avec des promesses (async/await)
import mysql from 'mysql2/promise';
// Import de la configuration d'environnement pour récupérer les paramètres de connexion
import { env } from '../config/env.js';

// Création d'un pool de connexions MySQL
// Un pool permet de réutiliser les connexions et d'améliorer les performances
export const pool = mysql.createPool({
    // Adresse du serveur MySQL
    host: env.db.host,
    // Port de connexion MySQL
    port: env.db.port,
    // Nom d'utilisateur pour la connexion
    user: env.db.user,
    // Mot de passe pour la connexion
    password: env.db.password,
    // Nom de la base de données à utiliser
    database: env.db.database,
    // Limite du nombre de connexions simultanées dans le pool (10 connexions max)
    connectionLimit: 10,
});

/**
 * Fonction asynchrone pour tester la connexion à la base de données
 * Exécute une requête simple (SELECT NOW()) pour vérifier que la connexion fonctionne
 * Affiche l'heure actuelle du serveur MySQL si la connexion réussit
 */
export async function testConnection() {
    // Exécution d'une requête SQL pour obtenir l'heure actuelle du serveur MySQL
    const [rows] = await pool.query('SELECT NOW() AS now');
    // Affichage de l'heure pour confirmer la connexion réussie
    console.log('conecter à mysql à :' , rows[0].now);
}