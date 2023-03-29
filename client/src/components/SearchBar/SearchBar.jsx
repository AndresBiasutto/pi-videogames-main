import React, { useState } from 'react';

const SearchBar = ({ searchGame }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getVideogameByName(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;