import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/Movies-api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      {movies && movies.map(movie => <li key={movie.id}>{movie.original_title}</li>)}
    </div>
  );
}
