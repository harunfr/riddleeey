import React from 'react';

import { Container, Row, Key } from './styles';

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const thirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Back-Space'];
function Header() {
  return (
    <Container>
      <Row>
        {firstRow.map((keyName) => (
          <Key>{keyName}</Key>
        ))}
      </Row>
      <Row>
        {secondRow.map((keyName) => (
          <Key>{keyName}</Key>
        ))}
      </Row>
      <Row>
        {thirdRow.map((keyName) => (
          <Key>{keyName}</Key>
        ))}
      </Row>
    </Container>
  );
}

export default Header;
