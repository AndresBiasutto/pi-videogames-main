const { Videogame, Genres } = require("../db")
const axios = require("axios")
const { API_KEY } = process.env;
const {where} = require("sequelize")



const postNewGame = async (name, description, platforms, image, releaseDate, rating, genre) => {
    const newGame = await Videogame.create({ name, description, platforms, image, releaseDate, rating, genre })
    if (genre && genre.length > 0) {
        await newGame.setGenres(genre)
    }
    return newGame;
}
// const getVideogame = async (idVideogame, source) => {
//     const videogame = source === "api"
//     ? 
//     : await Videogame.findByPk(idVideogame, {
//         include: {
//             model: Videogame,
//             attributes:["name"]
//         },
//     })
 //   return videogame;
//}
const getVideogame = async (idVideogame, source) => {
    const game = source === "api"
        ?   (await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)).data
        :await Videogame.findByPk(idVideogame, {
            include: {
                model: Genres,
                attributes:["id", "name"]
            },
        })
        return game;
    }
module.exports = { postNewGame, getVideogame };