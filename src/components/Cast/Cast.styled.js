import styled from 'styled-components';

export const StyledList = styled.ul`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
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
    justify-content: flex-start;
    height: 70px;
  }

  .title,
  .text {
    padding: 0;
    margin: 0;
  }
`;

export const StyledText = styled.p`
  padding: 0 0 0 40px;
`;
