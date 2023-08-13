import './ActorCard.css';
import { Link } from 'react-router-dom';

export default function ActorCard({ actor }) {
    return (
        <Link to={`/actors/${encodeURIComponent(actor)}`}>
          <div className="actor-card">
            <div
              className="actor-card-background"
              style={{
                backgroundImage: `url(https://picsum.photos/200/300?random=${encodeURIComponent(actor)})`,
              }}
            ></div>
            <h3>{actor}</h3>
          </div>
        </Link>
    );
}