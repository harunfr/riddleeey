/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-lone-blocks */
import styled from 'styled-components';

import {
  fadeOutIn,
  fold,
  foldReverse,
  foldMixin,
  unfoldMixin,
  foldReverseMixin,
  unfoldReverseMixin,
} from './animations';

export const Container = styled.div<{
  turn: number;
  gameStatus: null | string;
  showGuesses: boolean;
}>`
  overflow: hidden;
  margin: 0 auto;
  display: grid;
  row-gap: 5px;
  width: 100%;

  > :nth-child(odd) {
    transform-origin: bottom center;
    animation: ${fold} 1s linear 1 forwards;
  }
  > :nth-child(even) {
    transform-origin: top center;
    animation: ${foldReverse} 1s linear 1 forwards;
  }
  > :nth-child(1) {
    ${(props) =>
      // @ts-ignore
      (props.turn > -1 && !props.gameStatus) || props.showGuesses
        ? 'animation: none;'
        : foldMixin};
  }
  > :nth-child(2) {
    ${(props) =>
      // eslint-disable-next-line no-mixed-operators
      (props.turn > 0 && !props.gameStatus) || props.showGuesses
        ? unfoldMixin
        : foldMixin};
  }
  > :nth-child(3) {
    ${(props) =>
      (props.turn > 1 && !props.gameStatus) || props.showGuesses
        ? unfoldReverseMixin
        : foldReverseMixin};
  }
  > :nth-child(4) {
    ${(props) =>
      (props.turn > 2 && !props.gameStatus) || props.showGuesses
        ? unfoldMixin
        : foldMixin};
  }
  > :nth-child(5) {
    ${(props) =>
      (props.turn > 3 && !props.gameStatus) || props.showGuesses
        ? unfoldReverseMixin
        : foldReverseMixin};
  }
  > :nth-child(6) {
    ${(props) =>
      (props.turn > 4 && !props.gameStatus) || props.showGuesses
        ? unfoldMixin
        : foldMixin};
  }
  > :nth-child(7) {
    animation: none;
  }
`;

export const Row = styled.div<{ turn?: number }>`
  display: flex;
  justify-content: center;
  column-gap: 5px;
  transition: all linear 1s;
  > :nth-child(1) {
  }
`;

export const Cell = styled.div<{ turn?: number; status?: string }>`
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  border: ${(props) => (!props.status ? '2px solid #d3d6da' : 'none')};
  color: ${(props) => (props.status ? '#eee' : '#5773ff')};
  background-color: ${(props) =>
    props.status === 'correct'
      ? '#6AAA64'
      : props.status === 'present'
      ? '#C9B458'
      : props.status === 'absent'
      ? '#787C7E'
      : null};
`;

export const DecorativeContainer = styled(Row)`
  padding-left: 5px;
  & > * {
    animation: ${fadeOutIn} 1.5s linear infinite forwards;
    background-color: #6aaa64;
    color: #fff;
  }
  & > :nth-child(1) {
    animation-delay: 0.3s;
  }
  & > :nth-child(2) {
    animation-delay: 0.6s;
  }
  & > :nth-child(3) {
    animation-delay: 0.9s;
  }
`;

export const DecorativeCell = styled(Cell)`
  width: 62px;
  height: 62px;
  border: none;
`;
