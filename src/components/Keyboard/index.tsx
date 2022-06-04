import React from 'react';

import { Container, Row, Key } from './styles';

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const thirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'];
interface KeyboardProps {
  // eslint-disable-next-line no-unused-vars
  keyClickHandler: (children: string) => void;
}
// @ts-ignore
// eslint-disable-next-line react/prop-types
function Keyboard({ keyboardState, keyClickHandler }: KeyboardProps) {
  return (
    <Container>
      <Row>
        {/* typescript accepts only 'children' name for content */}
        {firstRow.map((children) => (
          <Key
            key={children}
            status={keyboardState[children]}
            onClick={() => keyClickHandler(children)}
          >
            {children}
          </Key>
        ))}
      </Row>
      <Row>
        {secondRow.map((children) => (
          <Key
            key={children}
            status={keyboardState[children]}
            onClick={() => keyClickHandler(children)}
          >
            {children}
          </Key>
        ))}
      </Row>
      <Row>
        {thirdRow.map((children) => (
          <Key
            key={children}
            status={keyboardState[children]}
            onClick={() => keyClickHandler(children)}
          >
            {children}
          </Key>
        ))}
      </Row>
    </Container>
  );
}

export default Keyboard;
