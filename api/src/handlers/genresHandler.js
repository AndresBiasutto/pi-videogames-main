const axios = require('axios')
const { API_KEY } = process.env;
const { Genres } = require('../db');


const getGenresHandler= async (req, res)=>{
    try {
        const genresDb = await Genres.findAll();
        if (genresDb.length) return res.json(genresDb)
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        const genres = response.data.results;
        genres.forEach(async g => {
            await Genres.findOrCreate({
                where: {
                    id: g.id,
                    name: g.name
                }
            })
        })
        const generos= genres.map((genero)=>{
            return {id: genero.id, name: genero.name}
        })
        res.status(200).json(generos)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports=getGenresHandler;