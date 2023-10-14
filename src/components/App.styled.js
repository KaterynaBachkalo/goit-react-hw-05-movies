import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: tomato;
  border: 1px solid tomato;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: tomato;
    color: white;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px;
  box-shadow: 0px 24px 20px -20px rgba(245, 166, 35, 1);
`;
