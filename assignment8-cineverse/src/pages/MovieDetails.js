import { useParams, useNavigate } from "react-router-dom";
import { movies } from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  return (
    <div className="details-container">
      <img src={movie.image} alt={movie.title} className="details-image" />

      <div className="details-info">
        <h1>{movie.title}</h1>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Duration:</strong> {movie.duration}</p>
        <p><strong>Rating:</strong> ⭐ {movie.rating}</p>

        <button
          onClick={() => navigate(`/book/${movie.id}`)}
        >
          Book Seat
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;