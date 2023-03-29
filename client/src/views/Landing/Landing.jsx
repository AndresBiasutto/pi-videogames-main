import { Link } from "react-router-dom";

const Landing= (props)=>{
    return(
        <div>
            <h1>soy Landing</h1>
            <Link to="/home">Ver todos los juegos</Link>
        </div>
    )
}

export default Landing;