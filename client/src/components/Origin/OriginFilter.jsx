const OriginFilter= ({ onOriginChange })=> {
    return (
      <form>
        <label htmlFor="origin-select">Filtrar por origen:</label>
        <select id="origin-select" onChange={onOriginChange}>
          <option value="all">Todos los videojuegos</option>
          <option value="api">Videojuegos de API</option>
          <option value="created">Videojuegos creados por mí</option>
        </select>
      </form>
    );
  }
  
  export default OriginFilter;