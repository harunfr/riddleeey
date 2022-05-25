import React from 'react';

import Game from '../../Game/Game';
import { Container, Row, Cell } from './styles';

const game = new Game();

function InputArea() {
  return (
    <Container>
      {game.cellsStack.map((row) => (
        <Row>
          {row.map((cell) => (
            <Cell>{cell.letter}</Cell>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default InputArea;
