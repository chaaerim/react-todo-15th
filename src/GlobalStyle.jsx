import { createGlobalStyle } from 'styled-components';

//페이지 전체에 적용될 style
const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  background: rgb(182, 223, 224);
}

button {
  border: none;
  background: none;
  font-size: 17px;
}

  button:hover {
    cursor: pointer;
  }
  form {
    text-align: center;
  }

`;

export default GlobalStyle;
