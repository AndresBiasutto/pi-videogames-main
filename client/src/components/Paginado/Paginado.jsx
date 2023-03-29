const Paginado = ({ videogamesPerPage, videogames, paginado }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(videogames / videogamesPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button onClick={() => paginado(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Paginado;