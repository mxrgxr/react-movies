import { movies } from '../../data.js';
import MovieCard from '../../components/MovieCard/MovieCard';
import { Link } from 'react-router-dom';

export default function MoviesListPage(){
    return (
        <div className="movies-list">
        {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
        ))}
        </div>
    );
}