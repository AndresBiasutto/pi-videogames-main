const {postNewGame}=require("../controllers/videogameControllers")


const getVideogameHandler = (req, res) => {
    const { name } = req.query;
    if (name !== undefined) {
        res.send(`quiero buscar algo con el nombre ${name}`)
    } else {
        res.send(`quiero buscar a todos los juegos`)
    }
    res.send("estoy en videogame")
}
const getVideogameByIdHandler = (req, res) => {
    const { idVideogame } = req.params;
    res.send(`enviar el detalle solicitado por el id: ${idVideogame}`)
}
const postVideogameHandler = async (req, res) => {
    try {
        const { name, description, platforms, image, releaseDate, rating, genre } = req.body;
        const newGame = await postNewGame(name, description, platforms, image, releaseDate, rating, genre)
        
        res.status(201).json(newGame)
    } catch (error) {
        res.status(400).json({error:error.message})
    }

    // res.send(`posteo un juego llamado ${name}, setrata de ${description}, ${platforms}. Bue la imagen.. ${image}. Sale el ${releaseDate} su puntaje es de : ${rating}`)
}

module.exports = { getVideogameHandler, getVideogameByIdHandler, postVideogameHandler }