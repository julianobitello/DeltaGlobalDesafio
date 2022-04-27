import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  height: auto;
  width: 100%;
  border-radius: 0.62rem;
`;

export const Content = styled.div`
  img {
    height: 15.81rem;
    width: 100%;
    border-radius: 0.62rem 0.62rem 0 0;
  }

  h3 {
    margin: 2rem 1.8rem 1.25rem 1.8rem;
  }
`;

export const User = styled.div`
  padding: 0 2rem 2rem;
  display: flex;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
  }
`;

export const UserInfo = styled.div`
  flex-direction: column;
  padding-left: 1rem;
  color: #6d6d6d;
`;
