import 'dotenv/config';
import express from 'express';
import router from './app/router.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'app/views');

// Middleware pour ajouter le chemin de la requête dans les variables locales
app.use((req, res, next) => {
    res.locals.currentUrl = req.path;
    next();
});

app.use(router);

// Middlewre 404
app.use(function(req, res, next) {
    res.status(404).render('error/404.ejs');
  });

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});