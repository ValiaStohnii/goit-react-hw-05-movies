import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as moviesApi from '../../services/Movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => {
            if (!movie.original_title) {
              return null;
            }
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                  {movie.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
