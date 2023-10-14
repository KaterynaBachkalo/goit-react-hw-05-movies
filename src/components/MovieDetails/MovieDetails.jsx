import { Loader } from 'components/Loader/Loader';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import {
  StyledAdditional,
  StyledContainer,
  StyledContainerList,
} from './MovieDetails.styled';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const BaseImgUrl = 'https://image.tmdb.org/t/p/w400';
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
      <Link to={backLinkHref.current}>Go Back</Link>

      {isLoading && <Loader />}
      {error && <p className="error">{error}</p>}

      {movieById && (
        <StyledContainerList>
          <img src={`${BaseImgUrl}${poster_path}`} alt={title} />
          <div className="wrapper">
            <h1>{title}</h1>
            {/* <p>User score:</p> */}
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres &&
                genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
            </ul>
          </div>
        </StyledContainerList>
      )}

      <StyledAdditional>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
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
