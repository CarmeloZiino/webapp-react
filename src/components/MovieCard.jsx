
import React from 'react';
import { Link } from 'react-router-dom';

// Componente MovieCard che rappresenta una singola card di film
const MovieCard = ({ movie }) => {

    return (

        <div className="movie-card">

            {/* Immagine della locandina del film */}
            <img src={movie.image} alt={movie.title} />

            {/* Testo della Card del film */}
            <div className="details">

                <h2 className='movie-details'>{movie.title}</h2>
                <p className='movie-details'><strong>Regista:</strong> {movie.director}</p>
                <p className='movie-details'><strong>Trama:</strong> {movie.abstract}</p>

                {/* Bottone per la navigazione alla pagina MovieDetail */}
                <Link to={`/movies/${movie.id}`}>

                    <button className='button-movie'> Maggiori informazioni</button>

                </Link>

            </div>

        </div>

    );

};

export default MovieCard;