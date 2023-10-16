import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
import { StyledContainer } from './Home.styled';

const Home = () => {
  const BaseImgUrl = 'https://image.tmdb.org/t/p/w400';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
                  <img
                    src={
                      movie.poster_path
                        ? `${BaseImgUrl}${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                    width={200}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </StyledContainer>
    </>
  );
};

export default Home;
