import { movies } from "../data/movies";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div className="container">
      <h1>CineVerse 🎬</h1>
      <p>Experience Cinema Beyond Reality</p>
      <div className="grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;