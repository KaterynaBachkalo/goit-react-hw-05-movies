import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import { StyledList } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const findMovieDetail = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchReviews(movieId);
        setReviews(movieData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    findMovieDetail();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p className="error">{error}</p>}
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(({ id, author, content }) => (
            <StyledList key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </StyledList>
          ))
        ) : (
          <p>We don't have any rewiews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
