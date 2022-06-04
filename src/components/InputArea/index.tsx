/* eslint-disable react/no-array-index-key */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, Row, Cell } from './styles';
import DecorativeCells from './DecorativeCells';
import { Cell as LetterCell } from '../../Game/Game';

interface InputAreaProps {
  cellsStack: LetterCell[][];
  gameStatus: string | null;
  turn: number;
  addingOrder: number;
  showGuesses: boolean;
}

function InputArea({
  turn,
  gameStatus,
  cellsStack,
  addingOrder,
  showGuesses,
}: InputAreaProps) {
  return (
    <Container turn={turn} gameStatus={gameStatus} showGuesses={showGuesses}>
      {cellsStack.map((row, rowIndex) => (
        <Row turn={turn} key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Row key={uuidv4()}>
              <Cell
                turn={turn}
                key={`${rowIndex}${cellIndex}`}
                status={cell.status}
              >
                {cell.letter}
              </Cell>
              {turn === 0 && cellIndex >= addingOrder + 2 && rowIndex === 0 && (
                <DecorativeCells />
              )}
            </Row>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default InputArea;
