/* eslint-disable no-lone-blocks */
import styled, { css, keyframes } from 'styled-components';

const fold = keyframes`
  0% {
    opacity: 1;
    height: 62px;
    transform: rotate3d(1, 0, 0, 0deg) skewX(0deg);
    display: flex;
  }
  80% {
    height: 30px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(20deg);
    display: none;
  }
  100% {
    opacity: 0;
    height: 0px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(60deg);
    display: none;
  }
`;

const foldReverse = keyframes`
  0% {
    opacity: 1;
    height: 62px;
    transform: rotate3d(1, 0, 0, 0deg) skewX(0deg);
    display: flex;
  }
  80% {
    height: 30px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(-20deg);
    display: none;
  }
  100% {
    opacity: 0;
    height: 0px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(60deg);
    display: none;
  }
`;

const fadeOutIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`;

const foldMixin = css`
  animation: ${fold} 2s linear 1 forwards;
`;

const foldReverseMixin = css`
  animation: ${foldReverse} 2s linear 1 forwards;
`;

export const Container = styled.div<{ turn: number }>`
  overflow: hidden;
  margin: 0 auto;
  border: 2px solid goldenrod;
  display: grid;
  row-gap: 5px;

  > :nth-child(odd) {
    transform-origin: bottom center;
    animation: ${fold} 1s linear 1 forwards;
  }
  > :nth-child(even) {
    transform-origin: top center;
    animation: ${foldReverse} 1s linear 1 forwards;
  }
  > :nth-child(1) {
    animation: none;
  }
  > :nth-child(2) {
    ${(props) => (props.turn > 0 ? 'animation: none;' : foldMixin)};
  }
  > :nth-child(3) {
    ${(props) => (props.turn > 1 ? 'animation: none;' : foldReverseMixin)};
  }
  > :nth-child(4) {
    ${(props) => (props.turn > 2 ? 'animation: none;' : foldMixin)};
  }
  > :nth-child(5) {
    ${(props) => (props.turn > 3 ? 'animation: none;' : foldReverseMixin)};
  }
  > :nth-child(6) {
    ${(props) => (props.turn > 4 ? 'animation: none;' : foldMixin)};
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
  border: 1px solid black;
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  & > * {
    animation: ${fadeOutIn} 1.5s linear infinite forwards;
    background-color: green;
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
export const DecorativeCell = styled(Cell)``;
