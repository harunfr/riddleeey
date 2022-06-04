/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable indent */
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

export const Key = styled.div<{ status: null | string }>`
  cursor: pointer;
  width: 43px;
  height: 55px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.85rem;
  background-color: #d3d6da;
  color: ${(props) => (props.status !== null ? '#eee' : '#222')};
  transition: transform 0.05s ease, color 0.4s ease, backcolor 0.4s ease;
  padding: 0
    ${(props) =>
      props.children === 'ENTER'
        ? '30'
        : props.children === 'Backspace'
        ? '40'
        : '2'}px;
  background-color: ${(props) =>
    props.status === 'correct'
      ? '#6AAA64'
      : props.status === 'present'
      ? '#C9B458'
      : props.status === 'absent'
      ? '#787C7E'
      : null};
  &:active {
    transform: scale(0.92);
  }
`;
