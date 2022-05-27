/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding-bottom: 1rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
`;

export const Key = styled.div<{ keyName?: string }>`
  width: 43px;
  height: 55px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.85rem;
  background-color: #d3d6da;
  padding: 0
    ${(props) => (props.keyName === 'ENTER'
    ? '30'
    : props.keyName === 'Backspace'
      ? '40'
      : '2')}px;
`;
