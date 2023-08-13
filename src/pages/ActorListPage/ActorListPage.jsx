import { movies } from '../../data.js';
import ActorCard from '../../components/ActorCard/ActorCard';

export default function ActorsListPage() {
  const actorsSet = new Set(movies.flatMap((movie) => movie.cast));
  const uniqueActors = Array.from(actorsSet);

  return (
    <div className="actors-list">
      {uniqueActors.map((actor, index) => (
        <ActorCard key={index} actor={actor} />
      ))}
    </div>
  );
}
