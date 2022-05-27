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
`;
