import styled from 'styled-components';

export const StyledList = styled.ul`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 50px 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .list {
    width: 200px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .title,
  .text {
    padding: 0;
    margin: 0;
  }
`;
