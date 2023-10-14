import { StyledContainer, StyledForm } from './Movies.styled';
import { ReactComponent as Icon } from '../../images/search.svg';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSearchedMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.searchQuery.value;
    setSearchParams({ query: searchValue });
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
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link
                  className="link"
                  state={{ from: location }}
                  to={`/movies/${id}`}
                >
                  {title}
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
