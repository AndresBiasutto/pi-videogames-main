
const getGenres = require('../controllers/genresControllers');



const getGenresHandler= async (req, res)=>{
    try {
        generos=await getGenres(res)
        res.status(200).json(generos)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}

module.exports=getGenresHandler;