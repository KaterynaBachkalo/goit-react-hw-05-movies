import { Loader } from 'components/Loader/Loader';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  StyledAdditional,
  StyledContainer,
  StyledContainerList,
  StyledNavLink,
} from './MovieDetails.styled';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const BaseImgUrl = 'https://image.tmdb.org/t/p/w400';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieById, setMovieById] = useState({});

  useEffect(() => {
    if (!movieId) return;

    const findMovieDetail = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieDetails(movieId);
        setMovieById(movieData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    findMovieDetail();
  }, [movieId]);

  const { title, poster_path, overview, genres } = movieById;

  return (
    <StyledContainer>
      <Link to={backLinkHref.current} className="link">
        Go Back
      </Link>

      {isLoading && <Loader />}
      {error && <p className="error">{error}</p>}

      {movieById && (
        <StyledContainerList>
          <img
            src={poster_path ? `${BaseImgUrl}${poster_path}` : defaultImg}
            alt={title}
            width={500}
          />
          <div className="wrapper">
            <h1>{title}</h1>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres && genres.length !== 0 ? (
              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            ) : (
              <p>We don't have any genres for this movie</p>
            )}
          </div>
        </StyledContainerList>
      )}

      <StyledAdditional>
        <h2>Additional Information</h2>
        <ul className="list">
          <li>
            <StyledNavLink to="cast">Cast</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews">Reviews</StyledNavLink>
          </li>
        </ul>
      </StyledAdditional>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </StyledContainer>
  );
};

export default MovieDetails;
