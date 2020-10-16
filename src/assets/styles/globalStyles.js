import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;        
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 60px 80px 80px 80px;
    font-family: 'Montserrat';
    box-sizing: border-box;
   
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  
  p {
    font-size: 16px;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
