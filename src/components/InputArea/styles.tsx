import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0 auto; */
  border: 2px solid goldenrod;
  display: grid;
  row-gap: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5px;
`;

export const Cell = styled.div`
  border: 1px solid black;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
