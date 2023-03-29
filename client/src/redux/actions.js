import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_VIDEOGAME_BY_NAME= "GET_VIDEOGAME_BY_NAME";
export const GET_GENRES= "GET_GENRES";
export const FILTER_BY_RANK= "FILTER_BY_RANK";
export const SORT_VIDEOGAMES_BY_RANK = "SORT_VIDEOGAMES_BY_RANK";
export const SELECT_GAME = "SELECT_GAME";

export function getVideogames() {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/videogame");

        return dispatch({ type: GET_VIDEOGAMES, payload: apiData.data })
    }
}
export function getVideogameByName(name){
    return async function (dispatch){
        const apiData= await axios.get(`http://localhost:3001/videogame/?name=${name}`);
        console.log(apiData.data)
        return dispatch({type: GET_VIDEOGAME_BY_NAME, payload:apiData.data[0]})
    }
}
export function getVideogame(id) {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/videogame/?${id}`);

        return dispatch({ type: GET_VIDEOGAMES, payload: apiData.data })
    }
}
export function getGenres(){
    return async function(dispatch){
        const apiData = await axios.get(`http://localhost:3001/genres`)

        return dispatch({type:GET_GENRES, payload:apiData.data})
    }
}
export const sortVideogamesByRank = (order) => (dispatch) => {
    dispatch({ type: SORT_VIDEOGAMES_BY_RANK, payload: order });
  };
  export const selectGame = (game) => {
    return {
        type: SELECT_GAME,
        payload: game
    }
}