import React from 'react';

import {
  Container,
  CloseButton,
  ContentWrapper,
  DummyCells,
  LessonWrapper,
  DummyCell,
  IntroWrapper,
  ExamplesWrapper,
  ListWrapper,
  BoldText,
  MainTitle,
  ExamplesTitle,
  Strong,
} from './styles';

interface HowToModalProps {
  handleShowHowToClick: () => void;
}

function HowToModal({ handleShowHowToClick }: HowToModalProps) {
  return (
    <Container>
      <ContentWrapper>
        <CloseButton onClick={handleShowHowToClick} />
        <MainTitle>HOW TO PLAY</MainTitle>

        <IntroWrapper>
          <p>
            {' '}
            Guess the
            {' '}
            <BoldText>riddle</BoldText>
            {' '}
            in six tries.
          </p>
          <p>
            Each guess must be a valid five-letter word. Hit the enter button to
            submit.
          </p>
          <p>
            After each guess, the color of the tiles will change to show how
            close your guess was to the word.
          </p>
        </IntroWrapper>
        <ExamplesWrapper>
          <ExamplesTitle>Examples</ExamplesTitle>

          <LessonWrapper>
            <DummyCells>
              <DummyCell status="correct">W</DummyCell>
              <DummyCell status="present">I</DummyCell>
              <DummyCell status="absent">N</DummyCell>
              <DummyCell>G</DummyCell>
              <DummyCell>S</DummyCell>
            </DummyCells>

            <ListWrapper>
              <li>
                The letter
                {' '}
                <BoldText>W</BoldText>
                {' '}
                is in the word and in the
                correct spot.
              </li>
              <li>
                The letter
                {' '}
                <BoldText>I</BoldText>
                {' '}
                is in the word and not in the
                correct spot.
              </li>
              <li>
                The letter
                {' '}
                <BoldText>N</BoldText>
                {' '}
                is not in the word in any
                spot.
              </li>
              <li>
                The letter
                {' '}
                <BoldText>G</BoldText>
                {' '}
                &
                {' '}
                <BoldText>S</BoldText>
                {' '}
                is
                redundant.
              </li>
            </ListWrapper>
          </LessonWrapper>

          <LessonWrapper>
            <DummyCells>
              <DummyCell status="absent">W</DummyCell>
              <DummyCell status="present">O</DummyCell>
              <DummyCell status="present">R</DummyCell>
              <DummyCell status="absent">D</DummyCell>
              <DummyCell status="present">L</DummyCell>
              <DummyCell status="absent">E</DummyCell>
            </DummyCells>
            <DummyCells>
              <DummyCell status="present">R</DummyCell>
              <DummyCell status="absent">I</DummyCell>
              <DummyCell status="absent">D</DummyCell>
              <DummyCell status="present">L</DummyCell>
              <DummyCell status="absent">E</DummyCell>
              <DummyCell status="absent">E</DummyCell>
              <DummyCell status="absent">E</DummyCell>
              <DummyCell status="absent">Y</DummyCell>
            </DummyCells>

            <p>After first guess, length of the answer can be seen.</p>
          </LessonWrapper>
        </ExamplesWrapper>
        <Strong>
          <BoldText>A new Riddle will not be available each day!</BoldText>
        </Strong>
      </ContentWrapper>
    </Container>
  );
}

export default HowToModal;
