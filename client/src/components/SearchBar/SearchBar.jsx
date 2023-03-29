import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Buscar por nombre" value={query} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;