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
      {cast && (
        <ul>
          {cast.map(cast => (
            <li key={cast.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.name} />
              <p>{cast.name}</p>
              <p>Character:{cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
