import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Game from '../../Game/Game';
import { Container, Row, Cell } from './styles';

const game = new Game();
game.answer = 'WORDLE';

function InputArea() {
  const cellsStackSnapShot = [...game.cellsStack];
  const [cellsStack, setCellsStack] = useState(cellsStackSnapShot);

  const keyDownHandler = (event: any) => {
    if (event.key === 'Enter') {
      game.makeAGuess();
    } else if (event.key === 'Backspace') {
      game.delete();
    } else {
      game.add(event.key);
    }
    setCellsStack(game.cellsStack.slice());
  };

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <Container>
      {cellsStack.map((row) => (
        <Row key={uuidv4()}>
          {row.map((cell) => (
            <Cell key={uuidv4()}>{cell.letter}</Cell>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default InputArea;
