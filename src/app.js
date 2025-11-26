// Import du framework Express pour créer l'application web
import express from 'express';
// Import du middleware CORS pour gérer les requêtes cross-origin
import cors from 'cors';
// Import du middleware Morgan pour logger les requêtes HTTP
import morgan  from 'morgan';
// Import des routes d'authentification
import authRoutes from './routes/auth.routes.js'

// Création de l'instance Express
const app = express();

// Configuration du middleware CORS pour autoriser les requêtes depuis d'autres origines
app.use(cors());
// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
// Middleware pour logger toutes les requêtes HTTP entrantes
app.use(morgan());

// Route de test pour vérifier que le serveur fonctionne correctement
app.get('/test', (req, res)=>{
    console.log('Route de test ok');
    res.send('Route de test ok');
});

// Montage des routes d'authentification sous le préfixe /api/auth
// Toutes les routes définies dans authRoutes seront accessibles via /api/auth/*
app.use('/api/auth', authRoutes);

// Middleware de gestion globale des erreurs
// Capture toutes les erreurs non gérées et renvoie une réponse JSON appropriée
app.use((err, req, res, next)=>{
    // Log de l'erreur dans la console pour le débogage
    console.error(err);
    // Envoi d'une réponse d'erreur avec le statut HTTP approprié (500 par défaut)
    res.status(err.status || 500).json({
        error: err.message || 'erreur server'
    });
});


// Export de l'application Express configurée pour utilisation dans server.js
export default app;

