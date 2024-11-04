import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* outline:1px solid red; */
}


body {
  margin: 0;
  font-family: "Poppins","DM Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${props => props.theme.BackgroundColor};
  color:${props => props.theme.fontColor};
  transition:.3s ease;
  
}

h1,h2 {
  color:${props => props.theme.fontAccentColor};
}
a{
  text-decoration:none;
}
ul {
  list-style-type:none;

}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
 }
`;
