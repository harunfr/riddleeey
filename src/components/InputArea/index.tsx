import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Game from '../../Game/Game';
import { Container, Row, Cell } from './styles';

const game = new Game();

function InputArea() {
  return (
    <Container>
      {game.cellsStack.map((row) => (
        <Row key={uuidv4()}>
          {row.map((cell) => (
            <Cell key={uuidv4()}>{cell.letter || 'A'}</Cell>
          ))}
        </Row>
      ))}
    </Container>
  );
}

export default InputArea;
