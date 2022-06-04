import { css, keyframes } from 'styled-components';

export const fold = keyframes`
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

export const unfold = keyframes`
0% {
    opacity: 1;
    height: 0px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(60deg);
    display: none;
  }
  80% {
    height: 30px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(20deg);
    display: none;
  }
  100% {
    height: 62px;
    transform: rotate3d(1, 0, 0, 0deg) skewX(0deg);
    display: flex;
  }
`;

export const foldReverse = keyframes`
  0% {
    opacity: 1;
    height: 62px;
    transform: rotate3d(1, 0, 0, 0deg) skewX(0deg);
    display: flex;
  }
  /* 80% {
    height: 30px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(-20deg);
    display: none;
  } */
  100% {
    height: 0px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(60deg);
    display: none;
  }
`;

export const unfoldReverse = keyframes`
  0% {
    opacity: 0;
    height: 0px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(60deg);
    display: none;
  }
  /* 80% {
    height: 30px;
    transform: rotate3d(1, 0, 0, 90deg) skewX(-20deg);
    display: none;
  } */
  100% {
    opacity: 1;
    height: 62px;
    transform: rotate3d(1, 0, 0, 0deg) skewX(0deg);
    display: flex;
  }
`;

export const fadeOutIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`;

export const foldMixin = css`
  animation: ${fold} 2s linear 1 forwards;
`;

export const unfoldMixin = css`
  animation: ${unfold} 0.5s linear 1 forwards;
`;

export const foldReverseMixin = css`
  animation: ${foldReverse} 2s linear 1 forwards;
`;

export const unfoldReverseMixin = css`
  animation: ${unfoldReverse} 0.5s linear 1 forwards;
`;
