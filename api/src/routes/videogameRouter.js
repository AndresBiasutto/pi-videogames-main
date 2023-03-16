const {Router} = require("express");
const {getVideogameHandler,getVideogameByIdHandler, postVideogameHandler}= require("../handlers/videogamesHandler")

const videogameRouter = Router();

videogameRouter.get("/", getVideogameHandler);
videogameRouter.get("/:idVideogame", getVideogameByIdHandler);
videogameRouter.post("/",postVideogameHandler);

module.exports= videogameRouter;