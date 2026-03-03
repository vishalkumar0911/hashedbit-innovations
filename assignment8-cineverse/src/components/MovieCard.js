import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={movie.image} alt={movie.title} />

      <div className="card-info">
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating} | {movie.duration}</p>
        <span>{movie.genre}</span>

        <button
          className="book-btn"
          onClick={() => navigate(`/movie/${movie.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;