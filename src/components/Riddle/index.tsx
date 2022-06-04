import React from 'react';

import { Container, Title, TodaysRiddle } from './styles';

interface RiddleProps {
  riddle: string;
}

function Riddle({ riddle }: RiddleProps) {
  return (
    <Container>
      <Title>Today’s riddle</Title>
      <TodaysRiddle>
        &quot;
        {riddle}
        &quot;
      </TodaysRiddle>
    </Container>
  );
}

export default Riddle;
