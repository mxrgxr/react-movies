import { useParams } from 'react-router-dom';
import { movies } from '../../data.js';

export default function ActorDetailPage() {
  const { actorName } = useParams();
  const actorMovies = movies.filter((movie) => movie.cast.includes(actorName));

  return (
    <div className="actor-detail">
      <h2>{actorName}</h2>
      <h3>Movies:</h3>
      <ul>
        {actorMovies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}