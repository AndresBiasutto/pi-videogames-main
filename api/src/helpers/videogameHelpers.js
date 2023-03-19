const filtradorDeDatos = async(games)=>{
    return await games.results.map((game)=>{
         return {
             id:game.id,
             name:game.name,
             description:game.description,
             platforms:game.platforms[0].platform.name,
             image:game.background_image,
             releaseDate:game.released,
             rating:game.rating
         }
        })
 }
const filtradosLosPrimeros15= (games)=>{
    return games.slice(0, 15)
}
 module.exports= {filtradorDeDatos, filtradosLosPrimeros15};