import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;

  .link {
    padding: 0 15px;
    text-decoration: none;
  }
`;

export const StyledContainerList = styled.div`
  display: flex;
  gap: 30px;

  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;
`;

export const StyledAdditional = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;

  .list {
    display: flex;
    gap: 20px;
    list-style-type: none;
    padding: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: tomato;
  border: 1px solid tomato;
  border-radius: 10px;
  display: inline-block;
  padding: 15px;
  font-size: 20px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: tomato;
    color: white;
  }
`;
