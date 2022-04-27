import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .search {
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    img {
      height: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }

  a {
    margin-left: 2rem;
    cursor: pointer;

    @media (max-width: 1075px) {
      margin-left: 1rem;
    }

    @media (max-width: 768px) {
      display: none;
      justify-content: space-between;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;

  @media (max-width: 768px) {
    display: flex;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMobile = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  align-items: center;

  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #6d6d6d;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  &.open {
    display: flex;
  }
`;
