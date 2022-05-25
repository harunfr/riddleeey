import React from 'react';

import { Container, Title, TodaysRiddle } from './styles';

function Riddle() {
  return (
    <Container>
      <Title>Today’s riddle</Title>
      <TodaysRiddle>
        &quot;Voiceless it cries, Wingless flutters, Toothless bites, Mouthless
        mutters.&quot;
      </TodaysRiddle>
    </Container>
  );
}

export default Riddle;
