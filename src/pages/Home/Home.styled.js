import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;

  .title {
    font-size: 30px;
    text-align: center;
  }

  .list {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    list-style-type: none;
  }

  .link {
    font-size: 20px;
    text-decoration: none;
  }
`;
