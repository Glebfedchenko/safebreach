import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing:border-box;
  font-size:62.5%;
}
*, *:before, *:after {
  box-sizing:inherit;
}
body {
  padding:0;
  margin:0;
  font-size:2rem;
  line-height:2;
}
a {
  text-decoration:none;
  color: ${props => props.theme.yellow};
  background: ${props => props.theme.black};
  padding: 0 5px;
  width: 70%;
  text-align: center;
  top:90%;
  left:50%;
  font-size:1.2rem;
  font-weight: bold;
  position: absolute;
  transform: translate(-50%,-50%);
}
`;
