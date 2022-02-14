import { Outlet, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/Movies-api';

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    moviesApi.fetchDetailsMovies(movieId).then(setMovie);
  }, [movieId]);

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
      {movie && (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>User Score: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        Additional information
        <ul>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MoviesDetailsPage;
