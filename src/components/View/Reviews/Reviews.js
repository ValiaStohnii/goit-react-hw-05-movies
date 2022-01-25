import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as moviesApi from '../../services/Movies-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApi.fetchReviewsMovies(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  console.log(reviews);
  return (
    <div>
      {reviews && (
        <div>
          {reviews.map(rev => (
            <p key={rev.id}>{rev.content}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
