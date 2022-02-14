import { Outlet, Link, useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as moviesApi from '../../services/Movies-api';
import SearchBar from './SearchBar';

export default function MoviesPage({ searchMovies }) {
  const [films, setFilms] = useState('');
  const [searchFilm, setSearchFilm] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const search = searchParams.get('query');

  useEffect(() => {
    if (films === '') {
      return;
    }
    moviesApi
      .fetchSearchMovies(films)
      .then(r => r.results)
      .then(setSearchFilm);
  }, [films]);

  useEffect(() => {
    if (search === null) {
      return;
    }
    moviesApi
      .fetchSearchMovies(search)
      .then(r => r.results)
      .then(setSearchFilm);
  }, [search]);

  const formSubmit = searchMovies => {
    setFilms(searchMovies);
    navigate({ ...location, search: `query=${searchMovies}` });
  };

  return (
    <div>
      <div>
        <SearchBar onSubmit={formSubmit} />
        <ul>
          {searchFilm &&
            searchFilm.map(movie => {
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
      <Outlet />
    </div>
  );
}
