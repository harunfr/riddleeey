import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DecorativeContainer, DecorativeCell } from './styles';

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
