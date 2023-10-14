import axios from 'axios';

const options = {
  method: 'GET',
  // url: 'https://api.themoviedb.org/3/authentication',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTQ4NDU5YzkwODljZDQyY2Q1MzYwY2JiNWMxNmEwNiIsInN1YiI6IjY1MjgxNWE0Mzc4MDYyMDEzOWExMjI5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tvuZQaDxtSX7MEVnQ8Z9bY5zeIDO3IhkSXhrJbyhgM',
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    options
  );
  return data;
};

export const fetchSearchedMovies = async queryMovieName => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${queryMovieName}`,
    options
  );
  return data;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  return data;
};

export const fetchCast = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return data;
};

export const fetchReviews = async movieId => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return data;
};
