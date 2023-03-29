
const Detail = (props) => {
     const game={
        name:"obliviontes",
        image:"https://pbs.twimg.com/media/FjFAIZkXkAIlwqT?format=jpg&name=900x900",
        platforms:"nintento",
        release_date: "23/4/2043",
        rating: 4,
        genre:  "asion!"
        }
    return (
       
        <div>
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} />
            <p>Plataformas: {game.platforms}</p>
            <p>{game.description}</p>
            <p>Fecha de lanzamiento: {game.release_date}</p>
            <p>Rating: {game.rating}</p>
            <p>Géneros: {game.genre}</p>
        </div>
    )
}

export default Detail;