import React from 'react';
import { DecorativeContainer, DecorativeCell } from './styles';
import { v4 as uuidv4 } from 'uuid';

function DecorativeCells() {
  return (
    <DecorativeContainer>
      <DecorativeCell key={uuidv4()}>?</DecorativeCell>
      <DecorativeCell key={uuidv4()}>?</DecorativeCell>
      <DecorativeCell key={uuidv4()}>?</DecorativeCell>
    </DecorativeContainer>
  );
}

export default DecorativeCells;

// {cellIndex === addingOrder && rowIndex === 0 && (
//   <DecorativeCells />
// )}
