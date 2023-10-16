import { StyledContainer, StyledForm } from './Movies.styled';
import { ReactComponent as Icon } from '../../images/search.svg';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchedMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const BaseImgUrl = 'https://image.tmdb.org/t/p/w400';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  const query = searchParams.get('query');
  console.log(query);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchQuery.value;
    setSearchParams({ query: searchValue });

    if (searchValue === '') {
      setSearchParams({});
      setMovies(null);
    }
  };

  useEffect(() => {
    if (!query) return;

    const findSearchMovies = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchSearchedMovies(query);
        setMovies(movieData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    findSearchMovies(query);
  }, [query]);

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <input className="input" type="text" name="searchQuery" />
        <button className="button" type="submit">
          <Icon />
        </button>
      </StyledForm>

      <div>
        {isLoading && <Loader />}
        {error && <p className="error">{error}</p>}
        {movies && (
          <StyledContainer>
            {movies.map(({ title, id, poster_path }) => (
              <li key={id}>
                <Link
                  className="link"
                  state={{ from: location }}
                  to={`/movies/${id}`}
                >
                  <img
                    src={
                      poster_path ? `${BaseImgUrl}${poster_path}` : defaultImg
                    }
                    alt={title}
                    width={200}
                  />
                </Link>
              </li>
            ))}
          </StyledContainer>
        )}
      </div>
    </div>
  );
};

export default Movies;
