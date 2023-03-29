import { getGenres } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";

const GenreFilter = () => {
    // const genres=[
    //     {
    //         "id": 4,
    //         "name": "Action"
    //     },
    //     {
    //         "id": 51,
    //         "name": "Indie"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Adventure"
    //     },
    //     {
    //         "id": 5,
    //         "name": "RPG"
    //     },
    //     {
    //         "id": 10,
    //         "name": "Strategy"
    //     },
    // ]
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch])
    const genres= useSelector(state=>state.genres)
    return (
        <div>
            <form>
                <label htmlFor="genre-select">Filtrar por género:</label>
                <select id="genre-select" >
                    <option value="">Todos los géneros</option>
                    {genres.map(genre => (
                        <option key={genre} value={genre.name}>{genre.name}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default GenreFilter;