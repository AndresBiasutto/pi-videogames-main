import Card from "../../components/Card/Card";
import style from "./Home.module.css"
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getVideogame, getVideogames } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import GenreFilter from "../../components/GenreFilter/GenreFilter";
import OriginFilter from "../../components/Origin/OriginFilter";
import RankingFilter from "../../components/RankingFilter/RankingFilter";

const Home = (props) => {
  
    
    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getVideogames())
    },[dispatch])
    useEffect(()=>{
        dispatch(getVideogame())
    },[dispatch])
    const videogames= useSelector(state=>state.videogames)
    console.log(videogames)
    return (
        <div>
            <h1>soy Home</h1>
            <SearchBar />
            <GenreFilter />
            <OriginFilter />
            <RankingFilter />

            <div className={style.cardsContainer}>
                {videogames.map((game) => <Card 
                image={game.image}
                name={game.name} 
                rating={game.rating}
                />
                )
                }
                {console.log(videogames)}
            </div>
        </div>
    )
}

export default Home;