import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+Paaji+2:wght@400;500;600&display=swap');

  {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #434547;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Baloo Paaji 2', cursive;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;
