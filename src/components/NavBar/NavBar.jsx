import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link to="/">Movies</Link>
      <Link to="/actors">Actors</Link>
      <p>Welcome {user}</p>
    </nav>
  );
}