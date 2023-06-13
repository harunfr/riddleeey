import React from 'react';

import { Container, Title, TodaysRiddle } from './styles';
import Spinner from './Spinner';

interface RiddleProps {
  riddle: string;
  isRiddleFetched: boolean;
}

function Riddle({ riddle, isRiddleFetched }: RiddleProps) {
  const fetchedRiddleMessage = 'Today’s riddle';
  const waitingFetchMessage = 'Preparing riddle...';
  return (
    <Container>
      <Title>
        {isRiddleFetched ? (
          fetchedRiddleMessage
        ) : (
          <p>
            <Spinner /> {waitingFetchMessage}
          </p>
        )}
      </Title>
      <TodaysRiddle>
        &quot;
        {riddle}
        &quot;
      </TodaysRiddle>
    </Container>
  );
}

export default Riddle;
