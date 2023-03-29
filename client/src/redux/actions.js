import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";
export const GET_GENRES= "GET_GENRES";

export function getVideogames() {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/videogame");

        return dispatch({ type: GET_VIDEOGAMES, payload: apiData.data })
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