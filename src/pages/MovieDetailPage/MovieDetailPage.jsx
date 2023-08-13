import { useParams } from 'react-router-dom';
import { movies } from '../../data.js';

export default function MovieDetailPage(){
    const { movieName } = useParams();

    const movie = movies.find((movie) => movie.title === movieName);
  
    if (!movie) {
      return <div>Movie not found</div>;
    }
  
    return (
      <div className="movie-detail">
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.releaseDate}</p>
        <img src={movie.posterPath} alt={movie.title} />
        <p>Cast: {movie.cast.join(', ')}</p>
      </div>
    );
}