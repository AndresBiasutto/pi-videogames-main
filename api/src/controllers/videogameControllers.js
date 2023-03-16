const { Videogame } = require("../db")

const postNewGame = async (name, description, platforms, image, releaseDate, rating, genre) => {
    const newGame = await Videogame.create({ name, description, platforms, image, releaseDate, rating, genre })
    if (genre && genre.length > 0) {
    await newGame.setGenres(genre)
    }
    return newGame;
}

module.exports = { postNewGame };