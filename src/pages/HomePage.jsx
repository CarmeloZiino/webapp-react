import MovieCard from "../components/MovieCard";
import axios from "axios";
import { useState, useEffect , useContext} from "react";


export default function HomePage() {
  const [movies, setMovies] = useState([]);

  //Funzione Fetch per i film
  const fetchMovies = () => {
    console.log("Fetching movies...");

    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-6 card-movie mb-3" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
        
      );
    });
  };

  useEffect(fetchMovies, []);

  return (
    <>
      <h1 className="h1-custom">Grandi film... solo per te!</h1>

      {/* <h2 className="movie-details">Qui andranno tutti i film</h2> */}
      <div className="container row">{renderMovies()}</div>
    </>
  );
}
