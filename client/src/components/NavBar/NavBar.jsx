import { Link } from "react-router-dom";

const NavBar= (props)=>{

    return(
        <div>
            <Link to="/home">HOME</Link>
            <Link to="/creategame">CREATE GAME</Link>
        </div>
    )
}

export default NavBar;