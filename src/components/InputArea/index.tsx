/* eslint-disable react/no-array-index-key */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, Row, Cell /* PlayAgainButton, */ } from './styles';
import DecorativeCells from './DecorativeCells';
import { Cell as LetterCell } from '../../Game/Game';

interface InputAreaProps {
  cellsStack: LetterCell[][];
  gameStatus: string | null;
  turn: number;
  addingOrder: number;
}

function InputArea({
  turn,
  gameStatus,
  cellsStack,
  addingOrder,
}: InputAreaProps) {
  return (
    <Container turn={turn} gameStatus={gameStatus}>
      {cellsStack.map((row, rowIndex) => (
        <Row turn={turn} key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div key={uuidv4()} style={{ display: 'flex' }}>
              {/* please extract me as wrapper ;/ */}
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
            </div>
          ))}
        </Row>
      ))}
      {/* <div
        style={{
          fontSize: '40px',
          fontWeight: '700',
        }}
      >
        {gameStatus} {gameStatus && answer}
        {gameStatus === 'success' && (
          <Row>
            {cellsStack[turn - 1].map((cell) => (
              <Cell status={cell.status} key={uuidv4()}>
                {cell.letter}
              </Cell>
            ))}
          </Row>
        )}
        <br />
        {gameStatus && <PlayAgainButton>New Game</PlayAgainButton>}
      </div> */}
    </Container>
  );
}

export default InputArea;
