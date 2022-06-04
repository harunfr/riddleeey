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

function App() {
  // start game
  const game = useRef(new Game());
  const gameClone = { ...game.current };

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
  };

  const handleShowGuess = (): void => {
    setShowGuesses(true);
  };
  useEffect(() => {
    game.current.answer = answer.toUpperCase();
  }, [answer, isRiddleFetched]);

  // fetch riddle and answer
  useEffect(() => {
    const riddlesSourceURL =
      'https://riddleeey-8000.herokuapp.com/api/v1/riddles/random';

    const fetchRiddle = async () => {
      setRiddle('Heroku dyno is waking up, please wait...');
      // await waitFor(2000);

      const response = await fetch(riddlesSourceURL);
      const fetchedRiddle = await response.json();
      const riddleObject = fetchedRiddle[0];
      setRiddle(riddleObject.body);
      setAnswer(riddleObject.answer);
      setIsRiddleFetched(true);
    };
    fetchRiddle();
  }, [shouldFetchNewRiddle]);

  const isValidInput = (input: string) => {
    const onlyLetterRegex = /^[a-zA-Z]$/;
    const isValid: boolean = onlyLetterRegex.test(input);
    return isValid;
  };

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
      <Keyboard />
    </MainWrapper>
  );
}

export default App;
