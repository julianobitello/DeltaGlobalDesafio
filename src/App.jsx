import React from 'react';
import { GlobalStyle } from './styles/global';

import Header from './Components/Header';
import Depositions from './Components/Depositions';
import Carousel from './Components/Carousel';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Depositions />
      <GlobalStyle />
    </>
  );
}

export default App;
