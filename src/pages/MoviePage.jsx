import axios from "axios";
import { useEffect, useState , useContext } from "react";
import { useParams } from "react-router-dom";

import ReviewCard from "../components/ReviewCard";
import ReviewsForm from "../components/ReviewsForm";

import GlobalContext from '../contexts/GlobalContext';

import StarRating from '../components/StarRating';

export default function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const { setIsLoading } = useContext(GlobalContext);


  const fetchMovie = () => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((error) => console.log(error))
      .then(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  const renderReviews = () => {
    return movie.reviews?.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };

  console.log(movie);

  return (
    <>
      <div className="card-show">
        <div className="section-due">
          <img src={movie.image} alt={movie.title} />
          <div className="section-details">
            <h1 className="title-custom-show">
              Titolo Film: <span className="details-show">{movie.title}</span>
            </h1>
            <h1 className="title-custom-show">
              Regista: <span className="details-show">{movie.director}</span>
            </h1>
            <h1 className="title-custom-show">
              Genere: <span className="details-show">{movie.genre}</span>
            </h1>
            <h1 className="title-custom-show">
              Anno: <span className="details-show">{movie.release_year}</span>
            </h1>
          </div>
          <div className="section-details-abs">
            <p className="title-custom-abs">Trama</p>
            <p className="details-abs">{movie.abstract}</p>
          </div>
        </div>


        
        <div className="section">
          <div className="">
            <h4 className="movie-show">Gli utenti dicono:</h4>
        {movie?.reviews && (
          <h5>
            Media: <StarRating vote={movie.average_vote} /> {movie.average_vote} / 5
          </h5>)}
        </div>



          {renderReviews()}

          {/*FORM*/}
          {movie?.id && (
            <ReviewsForm movie_id={movie.id} reloadReviews={fetchMovie} />
          )}
        </div>
      </div>
    </>
  );
}
