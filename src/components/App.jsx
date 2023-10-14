import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';
import { StyledNavLink, StyledNav } from './App.styled';

// import {Layout} from "./Layout"

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);

export const App = () => {
  return (
    <div>
      <header>
        <StyledNav>
          <StyledNavLink className="" to="/">
            Home
          </StyledNavLink>
          <StyledNavLink className="" to="/movies">
            Movies
          </StyledNavLink>
        </StyledNav>
      </header>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
