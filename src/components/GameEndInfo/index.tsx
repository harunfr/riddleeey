import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Cell as LetterCell } from '../../Game/Game';

import { Cell, Row } from '../InputArea/styles';

import {
  Container,
  PlayAgainButton,
  Answer,
  ShowGuessButton,
  ResultsWrapper,
  AnswerText,
  LoopIcon,
} from './styles';

interface HeaderProps {
  gameStatus: string | null;
  answer: string;
  turn: number;
  cellsStack: LetterCell[][];
  showGuesses: boolean;
  showGuessHandler: () => void;
  handleNewGame: () => void;
}

function GameEndInfo({
  gameStatus,
  answer,
  turn,
  cellsStack,
  showGuesses,
  showGuessHandler,
  handleNewGame,
}: HeaderProps) {
  return (
    <Container>
      {gameStatus === 'failure' && (
        <Answer>
          Answer was
          {' '}
          <AnswerText>{answer}</AnswerText>
        </Answer>
      )}
      {gameStatus && (
        <ResultsWrapper>
          {!showGuesses && (
            <ShowGuessButton onClick={showGuessHandler}>
              Show Guesses
            </ShowGuessButton>
          )}
          <PlayAgainButton onClick={handleNewGame}>
            New Riddle
            {' '}
            <LoopIcon />
          </PlayAgainButton>
        </ResultsWrapper>
      )}
      {gameStatus === 'success' && (
        <Row>
          {cellsStack[turn - 1].map((cell) => (
            <Cell status={cell.status} key={uuidv4()}>
              {cell.letter}
            </Cell>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default GameEndInfo;
