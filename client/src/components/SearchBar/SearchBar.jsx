import React, { useState } from 'react';
import Card from '../Card/Card'
import { useSelector } from 'react-redux';

const SearchBar = () => {
  const videogames = useSelector(state => state.videogames)
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
      setSearch(event.target.value);

  }

  return (
    <div>
          <input type="text" placeholder="Buscar juego" value={search} onChange={handleSearch} />
            <div >
                {
                videogames.filter((game) => game.name.toLowerCase().includes(search.toLowerCase())).map((game) => <Card
                    image={game.image}
                    name={game.name}
                    rating={game.rating}
                    genre={game.genres && game.genres.length > 0 ? game.genres.map((genre) => genre.name).join(", ") : 'genre not found'}
                />
                )}
                </div>
    </div>

  );
};

export default SearchBar;

