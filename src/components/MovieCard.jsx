import React from "react";
import { Link } from "react-router-dom";

// Componente MovieCard che rappresenta una singola card di film
const MovieCard = ({ movie }) => {
  const { id, title, director, abstract, image } = movie;

  return (
    <div className="d-flex singleCard">
      <div className="card">
        {/* Immagine della locandina del film */}
        <div className="imgMovie">
          <img className="card-img-top" src={image} alt={title} />
        </div>
        {/* Testo della Card del film */}
        <div className="card-body d-flex flex-column">
          <h2 className="movie-title card-title">{title}</h2>
          <p className="movieDir card-text">
            <strong>Regista:</strong> {director}
          </p>
          <p className="movieAbs card-text">
            <strong>Trama:</strong> {abstract}
          </p>

          {/* Bottone per la navigazione */}
          <div className="mt-auto">
            <Link to={`/movies/${id}`}>
              <button className="button-gen"> Maggiori info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
