/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import Game from './Game/Game';
import GlobalFonts from './fonts/fonts';
import GlobalStyle, { MainWrapper } from './styles/global';

import Header from './components/Header';
import InputArea from './components/InputArea';
import GameEndInfo from './components/GameEndInfo';
import Riddle from './components/Riddle';
import Keyboard from './components/Keyboard';

export interface IKeyboardCell {
  children: string;
  status: null | string;
}

function App() {
  // start game
  const game = useRef(new Game());
  const gameClone = { ...game.current };

  // keyboard letters state.
  const [keyboardState, setKeyboardState] = useState(gameClone.letters);

  // initial states
  const [gameState, setGameState] = useState({
    cellsStack: gameClone.cellsStack,
    gameStatus: gameClone.result,
    turn: gameClone.guessCount,
    addingOrder: gameClone.addingOrder,
  });

  const [showGuesses, setShowGuesses] = useState(false);
  const [isRiddleFetched, setIsRiddleFetched] = useState(false);
  const [riddle, setRiddle] = useState('');
  const [answer, setAnswer] = useState('');
  const [shouldFetchNewRiddle, setShouldFetchNewRiddle] = useState(false);

  const {
    cellsStack, gameStatus, turn, addingOrder,
  } = gameState;

  // input validator
  const isValidInput = (input: string) => {
    const onlyLetterRegex = /^[a-zA-Z]$/;
    const isValid: boolean = onlyLetterRegex.test(input);
    return isValid;
  };

  // event handler callbacks
  const handleNewGame = (): void => {
    game.current = new Game();
    // eslint-disable-next-line no-shadow
    const gameClone = { ...game.current };

    setGameState({
      cellsStack: gameClone.cellsStack,
      gameStatus: gameClone.result,
      turn: gameClone.guessCount,
      addingOrder: gameClone.addingOrder,
    });

    setShowGuesses(false);
    setIsRiddleFetched(false);
    setShouldFetchNewRiddle(!shouldFetchNewRiddle);
    setKeyboardState(gameClone.letters);
  };

  const handleShowGuess = (): void => {
    setShowGuesses(true);
  };

  // to handle keyboard key click events on bottom
  const handleKeyClick = (children: string) => {
    const hasRoomForLetter = gameState.addingOrder < 12;

    if (
      !isRiddleFetched ||
      gameState.gameStatus !== null ||
      !hasRoomForLetter
    ) {
      return;
    }

    if (children === 'ENTER') {
      game.current.makeAGuess();
    } else if (children === 'Backspace') {
      game.current.delete();
    } else if (!isValidInput(children)) {
      return;
    } else {
      game.current.add(children);
    }

    // eslint-disable-next-line no-shadow
    const gameClone = { ...game.current };

    setGameState({
      cellsStack: gameClone.cellsStack.slice(),
      gameStatus: gameClone.result,
      turn: gameClone.guessCount,
      addingOrder: gameClone.addingOrder,
    });
    setKeyboardState(gameClone.letters);
  };

  // to make sure answer is set in time.
  useEffect(() => {
    game.current.answer = answer.toUpperCase();
  }, [answer, isRiddleFetched]);

  // fetch riddle and answer
  useEffect(() => {
    const riddlesSourceURL =
      'https://riddleeey-8000.herokuapp.com/api/v1/riddles/random';

    const fetchRiddle = async () => {
      setRiddle('Heroku dyno is waking up, please wait...');
      const response = await fetch(riddlesSourceURL);
      const fetchedRiddle = await response.json();
      const riddleObject = fetchedRiddle[0];
      setRiddle(riddleObject.body);
      setAnswer(riddleObject.answer);
      setIsRiddleFetched(true);
    };
    fetchRiddle();
  }, [shouldFetchNewRiddle]);

  useEffect(() => {
    const keyDownHandler = (event: { key: string }) => {
      const hasRoomForLetter = gameState.addingOrder < 12;

      if (
        !isRiddleFetched ||
        gameState.gameStatus !== null ||
        !hasRoomForLetter
      ) {
        return;
      }

      if (event.key === 'Enter') {
        game.current.makeAGuess();
      } else if (event.key === 'Backspace') {
        game.current.delete();
      } else if (!isValidInput(event.key)) {
        return;
      } else {
        game.current.add(event.key);
      }

      // eslint-disable-next-line no-shadow
      const gameClone = { ...game.current };

      setGameState({
        cellsStack: gameClone.cellsStack.slice(),
        gameStatus: gameClone.result,
        turn: gameClone.guessCount,
        addingOrder: gameClone.addingOrder,
      });
      setKeyboardState(gameClone.letters);
    };

    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [gameState, isRiddleFetched, setGameState]);

  return (
    <MainWrapper>
      <GlobalStyle />
      <GlobalFonts />
      <Header />
      <InputArea
        cellsStack={cellsStack}
        gameStatus={gameStatus}
        turn={turn}
        addingOrder={addingOrder}
        showGuesses={showGuesses}
      />
      <GameEndInfo
        gameStatus={gameState.gameStatus}
        answer={answer}
        showGuessHandler={handleShowGuess}
        cellsStack={cellsStack}
        turn={turn}
        showGuesses={showGuesses}
        handleNewGame={handleNewGame}
      />
      <Riddle riddle={riddle} isRiddleFetched={isRiddleFetched} />
      <Keyboard
        // @ts-ignore
        keyboardState={keyboardState}
        keyClickHandler={handleKeyClick}
      />
    </MainWrapper>
  );
}

export default App;
