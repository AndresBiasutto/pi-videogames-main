import Card from "../../components/Card/Card";
import style from "./Home.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getVideogames } from "../../redux/actions";
import GenreFilter from "../../components/GenreFilter/GenreFilter";
import OriginFilter from "../../components/Origin/OriginFilter";
import RankingFilter from "../../components/RankingFilter/RankingFilter";
import Paginado from "../../components/Paginado/Paginado"

const Home = (props) => {
    const videogames = useSelector(state => state.videogames)
    const dispatch = useDispatch()
    //PAGINADO
    const [currentPage, setCurrentPage] = useState(1);
    const [videogamesPerPage] = useState(15);
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    const currentVideogames = videogames.slice(indexOfFirstVideogame, indexOfLastVideogame);
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
        console.log(event.target.value)
    }
    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])


    return (
        <div>
            <h1>soy Home</h1>

            <GenreFilter />
            <OriginFilter />
            <RankingFilter />
            <input type="text" placeholder="Buscar juego" value={search} onChange={handleSearch} />
            <div className={style.cardsContainer}>
                {currentVideogames.filter((game) => game.name.toLowerCase().includes(search.toLowerCase())).map((game) => <Card
                    image={game.image}
                    name={game.name}
                    rating={game.rating}
                />
                )}
                </div>
            <div className={style.cardsContainer}>
                {currentVideogames.map((game) => <Card
                    image={game.image}
                    name={game.name}
                    rating={game.rating}
                />
                )}

            </div>
            <Paginado
                videogamesPerPage={videogamesPerPage}
                videogames={videogames.length}
                paginado={paginado}
            />
        </div>
    )
}

export default Home;