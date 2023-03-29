import style from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <h3 className={style.nombre}>{props.name} </h3>
                <img className={style.imagen} src={props.image} alt="" />
                <p>rating: {props.rating}</p>
            </div>

        </div>
    )
}

export default Card;