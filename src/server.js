// Import de l'application Express configurée
import app from './app.js';
// Import de la configuration d'environnement (port, variables d'environnement)
import { env } from './config/env.js';
// Import de la fonction de test de connexion à la base de données et du pool
import { testConnection, pool } from './db/index.js';

/**
 * Fonction asynchrone pour démarrer le serveur
 * Vérifie d'abord la connexion à la base de données, puis démarre le serveur Express
 */
async function start() {
    try {
        // Vérification de la connexion à la base de données avant de démarrer le serveur
        await testConnection(); //fonction qui verifie si la co est ok
        // Démarrage du serveur Express sur le port configuré
        app.listen(env.port, ()=>{
            console.log(`server pret sur http://localhost:${env.port}`);
        })
    } catch (error) {
        // En cas d'erreur lors du démarrage, affichage de l'erreur et arrêt du processus
        console.error('lancement server impossible', error);
        process.exit(1);
    }
}

// Vérification si le fichier est exécuté directement (et non importé comme module)
// Cela permet de tester la connexion à la base de données indépendamment
if(import.meta.url === `file://${process.argv[1]}`) {
    // Test de connexion manuel à la base de données
    testConnection().then(()=>{
        console.log('test terminé');
        // Fermeture du pool de connexions après le test
        return pool.end();
    })
    .catch((error)=>{
        // Gestion des erreurs lors du test manuel
        console.error('test manuel échoué', error);
        process.exit(1);
    })
}

// Démarrage automatique du serveur
start();

