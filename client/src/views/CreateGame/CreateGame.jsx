import { useState } from "react";

const CreateGame= (props)=>{
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [plataformas, setPlataformas] = useState("");
    const [fechaLanzamiento, setFechaLanzamiento] = useState("");
    const [rating, setRating] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
        nombre,
        imagen,
        descripcion,
        plataformas,
        fechaLanzamiento,
        rating,
      });
      // Aquí podrías enviar los datos del formulario a una API, por ejemplo.
    };

    return(
        <div>
            <h1>soy CreateGame</h1>
            <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
      </label>
      <br />
      <label>
        Imagen:
        <input
          type="text"
          value={imagen}
          onChange={(event) => setImagen(event.target.value)}
        />
      </label>
      <br />
      <label>
        Descripción:
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />
      </label>
      <br />
      <label>
        Plataformas:
        <input
          type="text"
          value={plataformas}
          onChange={(event) => setPlataformas(event.target.value)}
        />
      </label>
      <br />
      <label>
        Fecha de lanzamiento:
        <input
          type="date"
          value={fechaLanzamiento}
          onChange={(event) => setFechaLanzamiento(event.target.value)}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
        </div>
    )
}

export default CreateGame;