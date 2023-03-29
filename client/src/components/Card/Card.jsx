import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectGame } from "../../redux/actions";

const Card = (props) => {
    const dispatch = useDispatch();
    const handleSelectGame = () => {
        dispatch(selectGame(props))
    }
    return (
        <Link to="/detail" onClick={handleSelectGame}>
            <div className={style.container}>
                <div className={style.card}>
                    <h3 className={style.nombre}>{props.name} </h3>
                    <img className={style.imagen} src={props.image} alt="" />
                    <p>rating: {props.rating}</p>
                    <p>genre: {props.genre}</p>
                </div>
            </div>
        </Link>

    )
}

export default Card;