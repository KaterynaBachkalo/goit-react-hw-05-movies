import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 30px 0;

  .input {
    font-size: 20px;
    width: 300px;
    padding: 15px;
    border-radius: 15px;
  }

  .button {
    padding: 15px;
    cursor: pointer;
    border-radius: 15px;
    border: 1px solid tomato;
    background-color: tomato;

    &:hover,
    &:focus {
      background-color: orange;
    }
  }
`;

export const StyledContainer = styled.ul`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  .link {
    font-size: 20px;
    text-decoration: none;
  }
`;
