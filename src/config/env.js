// Import de l'outil dotenv pour charger les variables d'environnement depuis le fichier .env
import dotenv from 'dotenv';
// import { JsonWebTokenError } from 'jsonwebtoken';

// Chargement des variables d'environnement depuis le fichier .env dans process.env
dotenv.config();

// Liste des variables d'environnement obligatoires pour le démarrage de l'application
// Vérification que toutes ces variables sont présentes dans le fichier .env
const required = ['DB_HOST', 'DB_USER', 'DB_NAME', 'JWT_SECRET'];
// Parcours de chaque variable requise
for(const key of required) {
    // Si une variable obligatoire est manquante, on lance une erreur
    if(!process.env[key]){
        throw new Error(`${key}: manquant dans le fichier .env`);
        
    }
}

// Export de l'objet de configuration contenant toutes les variables d'environnement
// Utilisation de valeurs par défaut pour certaines variables optionnelles
export const env = {
    // Port sur lequel le serveur écoutera (4000 par défaut si non spécifié)
    port: process.env.PORT ?? 4000,
    // Configuration de la base de données MySQL
    db: {
        // Adresse du serveur de base de données
        host: process.env.DB_HOST,
        // Port de connexion MySQL (3306 par défaut)
        port: Number (process.env.DB_PORT ?? 3306),
        // Nom d'utilisateur pour la connexion à la base de données
        user: process.env.DB_USER,
        // Mot de passe de la base de données (chaîne vide par défaut)
        password: process.env.DB_PASSWORD ?? '',
        // Nom de la base de données à utiliser
        database: process.env.DB_NAME,
    
  },
  // Secret utilisé pour signer et vérifier les tokens JWT
  jwtSecret: process.env.JWT_SECRET
}