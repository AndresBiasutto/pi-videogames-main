const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRouter =require("./videogameRouter");
const genresRouter = require("./genresRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogame", videogameRouter);
router.use("/genres", genresRouter);

module.exports = router;
