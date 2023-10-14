import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { StyledList } from './Cast.styled';
import imageEmpty from '../../images/empty.png';

const Cast = () => {
  const BaseImgUrl = 'https://image.tmdb.org/t/p/w200';
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const findMovieDetail = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchCast(movieId);

        setCast(movieData.cast);
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
      <StyledList>
        {cast &&
          cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className="list">
              {profile_path ? (
                <img src={`${BaseImgUrl}${profile_path}`} alt={name} />
              ) : (
                <img src={imageEmpty} alt={name} width={200} height={300} />
              )}

              <div className="wrapper">
                <h3 className="title">{name}</h3>
                <p className="text">Character: {character}</p>
              </div>
            </li>
          ))}
      </StyledList>
    </div>
  );
};

export default Cast;
