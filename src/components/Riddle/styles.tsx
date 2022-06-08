import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const dash = keyframes`
      0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
`

export const Container = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-color: ${(props) => props.theme.color};
`;

export const Title = styled.h2`
  font-size: 1.8rem;
`;

export const TodaysRiddle = styled.div`
  font-size: 1.6rem;
  font-family: 'Times New Roman', Times, serif;
`;

export const StyledSpinner = styled.svg`
  animation: ${rotate} 1s linear infinite;
  width: 30px;
  height: 30px;

  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
