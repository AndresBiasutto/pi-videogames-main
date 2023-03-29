import { GET_VIDEOGAMES, GET_VIDEOGAME, GET_GENRES, FILTER_BY_RANK, SORT_VIDEOGAMES_BY_RANK, GET_VIDEOGAME_BY_NAME } from "./actions";

const initialState = {
    videogames: [],
    videogame: "",
    genres: [],
    rating: 0
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload
            }
        case GET_VIDEOGAME:
            return {
                ...state,
                videogame: action.payload
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_VIDEOGAME_BY_NAME:
            return {
                ...state,
                videogame: action.payload
            }
        case FILTER_BY_RANK:
            const allVideogames = state.videogames;
            let rankFiltered = allVideogames;
            if (action.payload === "asc") {
                rankFiltered = allVideogames.sort((a, b) => a.rating - b.rating);
            }
            return {
                ...state,
                videogames: rankFiltered
            }
        case SORT_VIDEOGAMES_BY_RANK:
            const sortedVideogames = state.videogames.slice().sort((a, b) => {
                if (action.payload === "asc") {
                    return a.rating - b.rating;
                } else {
                    return b.rating - a.rating;
                }
            });

            return {
                ...state,
                videogames: sortedVideogames,
            };
        default:
            return {
                ...state
            }



    }


}

export default rootReducer;