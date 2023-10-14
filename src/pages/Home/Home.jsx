import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { StyledContainer } from './Home.styled';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const findTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchTrendingMovies();
        setMovies(movieData.results);
        console.log(movieData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    findTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p className="error">{error}</p>}
      <StyledContainer>
        <h1 className="title">Trending today </h1>
        <ul className="list">
          {movies &&
            movies.map(movie => (
              <li className="item" key={movie.id}>
                <Link className="link" to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
        </ul>
      </StyledContainer>
    </>
  );
};

export default Home;
