import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline:0;
  box-sizing:border-box;
  font-family: 'Open Sans', sans-serif;
}
#root{
  margin:0 auto;
}
`;

export const MainWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
`;

export const lightTheme = {
  color: '#333',
  background: '#FFF',
  howToColor: '#333',
};
export const darkTheme = {
  color: '#5773ff',
  background: '#101c29',
  howToColor: '#ddd',
};
