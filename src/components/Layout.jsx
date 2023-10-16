import { Outlet } from 'react-router-dom';
import { StyledNavLink, StyledNav } from './App.styled';

export const Layout = () => {
  return (
    <header>
      <StyledNav>
        <StyledNavLink className="" to="/">
          Home
        </StyledNavLink>
        <StyledNavLink className="" to="/movies">
          Movies
        </StyledNavLink>
      </StyledNav>
      <Outlet />
    </header>
  );
};
