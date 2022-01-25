import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/Movies-api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesApi.fetchCreditsMovies(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  console.log(cast);
  return (
    <div>
      {cast && <div>...</div>}
      {/* {cast &&
        // <div>
        //   <img src={`https://image.tmdb.org/t/p/w500/${ movie.poster_path}`} alt={movie.title} />
        //   <h2>{movie.title}</h2>
        //   <p>User Score: {movie.vote_average}</p>
        //   <h3>Overview</h3>
        //   <p>{movie.overview}</p>
        //   <h3>Genres</h3>
        //   <ul>
        //     {movie.genres.map(genre =>
        //       <li key={genre.id}>{genre.name}</li>)}
        //   </ul>
        // </div>
      } */}
    </div>
  );
};

export default Cast;
