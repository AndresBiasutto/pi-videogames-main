const { postNewGame, getGameById, getGameByName, getAllGames } = require("../controllers/videogameControllers")


const getVideogameHandler = async (req, res) => {
    const { name } = req.query;

    try {
        const response = name ? await getGameByName(name) : await getAllGames()
        res.send(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getVideogameByIdHandler = async (req, res) => {
    const { idVideogame } = req.params;
    const source = isNaN(idVideogame) ? "bdd" : "api";

    try {
        const videogame = await getGameById(idVideogame, source);
        res.status(200).json(videogame)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const postVideogameHandler = async (req, res) => {
    const { name, description, platforms, image, releaseDate, rating, genre } = req.body;

    try {
        const newGame = await postNewGame(name, description, platforms, image, releaseDate, rating, genre)
        res.status(201).json(newGame)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // res.send(`posteo un juego llamado ${name}, setrata de ${description}, ${platforms}. Bue la imagen.. ${image}. Sale el ${releaseDate} su puntaje es de : ${rating}`)
}

module.exports = { getVideogameHandler, getVideogameByIdHandler, postVideogameHandler }