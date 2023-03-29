const { Videogame, Genres } = require("../db")
const axios = require("axios")
const { API_KEY } = process.env;
const { filtradorDeDatos, filtradosLosPrimeros15 } = require("../helpers/videogameHelpers")

const postNewGame = async (name, description, platforms, image, releaseDate, rating, genre) => {
    const newGame = await Videogame.create({ name, description, platforms, image, releaseDate, rating, genre })
    if (genre && genre.length > 0) {
        await newGame.setGenres(genre)
    }
    return newGame;
}
const getGameById = async (idVideogame, source) => {

    const game = source === "api"
        ? (await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)).data
        : await Videogame.findByPk(idVideogame, {
            include: {
                model: Genres,
                attributes: ["id", "name"],
            },
        })
    const gameAtributosFiltrados = source === "api"
        ? {
            id: game.id,
            name: game.name,
            description: game.description,
            platforms: game.platforms[0].platform.name,
            image: game.background_image,
            releaseDate: game.released,
            rating: game.rating,
            genre: game.genres[0].name
        }
        : {
            id: game.id,
            name: game.name,
            description: game.description,
            image: game.image,
            releaseDate: game.releaseDate,
            rating: game.rating,
            genre: game.genres[0].name
        }
    return gameAtributosFiltrados;
}
const getGameByName = async (name) => {
    const GamesByNameApi = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data
    const gamesByNameFiltrados = await filtradorDeDatos(GamesByNameApi)
    const resultado = await filtradosLosPrimeros15(gamesByNameFiltrados)
    const gamesByNameDatabase = await Videogame.findAll({ where: { name: name } })
    return [...resultado, ...gamesByNameDatabase];
}
const getAllGames = async () => {
    const allGamesDataBase = await Videogame.findAll({
        include: {
            model: Genres,
            attributes: ["id", "name"],
        },
    })
    const allGamesApiSinFiltro = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`)).data
    const allGamesApiSinFiltro1 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=1`)).data
    const allGamesApiSinFiltro2 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`)).data
    const allGamesApiSinFiltro3 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=3`)).data
    
    const filtrado = await filtradorDeDatos(allGamesApiSinFiltro)
    const filtrado1 = await filtradorDeDatos(allGamesApiSinFiltro1)
    const filtrado2 = await filtradorDeDatos(allGamesApiSinFiltro2)
    const filtrado3 = await filtradorDeDatos(allGamesApiSinFiltro3)
    return [...allGamesDataBase, ...filtrado, ...filtrado1, ...filtrado2, ...filtrado3];
}
module.exports = { postNewGame, getGameById, getGameByName, getAllGames };