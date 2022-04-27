import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background-color: #F5F5F5;
      width: 65%;
      margin: 0 auto;
   }

   body, input, textarea, button {
      font-family: 'poppins', sans-serif;
      font-weight: 500;
   }

   button{
      cursor: pointer;
   }

`;
