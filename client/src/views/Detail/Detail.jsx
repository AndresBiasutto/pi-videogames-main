
import { useSelector } from "react-redux";

const Detail = () => {
    const videogame = useSelector((state) => state.selectedVideogame);

    if (!videogame) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{videogame.name}</h1>
            <img src={videogame.image} alt={videogame.name} />
            <p>Rating: {videogame.rating}</p>
            {videogame.genres && videogame.genres.length > 0 && (
                <p>Géneros: {videogame.genres.map((genre) => genre.name).join(", ")}</p>
            )}
        </div>
    );
};


export default Detail;