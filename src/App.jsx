import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import NavBar from './components/NavBar/NavBar';
import MoviesListPage from './pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import ActorsListPage from './pages/ActorListPage/ActorListPage';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <Router>
      {user && <NavBar user={user} />}
      <Routes>
        {!user && (
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        )}
        {user && (
          <>
            <Route path="/" element={<MoviesListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorsListPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
