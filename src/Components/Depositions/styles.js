import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: space-around;

  margin: 4rem auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 4rem;
  justify-content: center;

  @media (max-width: 1160px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
