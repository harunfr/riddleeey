import styled from 'styled-components';
import { ImLoop2 } from 'react-icons/im';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5rem;
  background-color: ${(props) => props.theme.background};
`;

const ResultSectionButton = styled.button`
  padding: 0.5rem 0.4rem;
  border-radius: 4px;
  font-size: 1.3rem;
  color: #eee;
  cursor: pointer;
  font-weight: bold;
  transition: transfrom 300 ease;
  border: none;
  &:active {
    transform: scale(0.97);
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const PlayAgainButton = styled(ResultSectionButton)`
  background-color: #6aaa64;
`;

export const Answer = styled.div`
  font-size: 1.6rem;
  color: ${(props) => props.theme.color};
`;

export const AnswerText = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;

export const ShowGuessButton = styled(ResultSectionButton)`
  background-color: #c9b458;
`;

export const ResultsWrapper = styled.div`
  display: flex;
  column-gap: 2rem;
`;

export const LoopIcon = styled(ImLoop2)`
  transform: translateY(20%);
`;
