import './MovieCard.css'
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className="movie-card">
          <div className="movie-card-image" style={{ backgroundImage: `url(${movie.posterPath})` }}></div>
          <div className="movie-card-details">
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
          </div>
        </div>
    </Link>
    );
}