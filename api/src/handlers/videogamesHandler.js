const {postNewGame, getVideogame}=require("../controllers/videogameControllers")


const getVideogameHandler = (req, res) => {
    const { name } = req.query;
    if (name !== undefined) {
        res.send(`quiero buscar algo con el nombre ${name}`)
    } else {
        res.send(`quiero buscar a todos los juegos`)
    }
    res.send("estoy en videogame")
}
const getVideogameByIdHandler = async(req, res) => {
    const { idVideogame } = req.params;
    const source= isNaN(idVideogame)? "bdd":"api";
    try {
        const videogame=  await getVideogame(idVideogame, source);
        console.log(videogame)
        res.status(200).json(videogame)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
    
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