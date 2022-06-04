/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';

import Game from './Game/Game';
import GlobalFonts from './fonts/fonts';
import GlobalStyle, { MainWrapper } from './styles/global';

import Header from './components/Header';
import InputArea from './components/InputArea';
import Riddle from './components/Riddle';
import Keyboard from './components/Keyboard';

function App() {
  // start game
  const game = useRef(new Game());
  // initial states
  const [riddle1, setRiddle1] = useState('');
  const [answer, setAnswer] = useState('');
  game.current.answer = answer.toUpperCase();
  const [gameState, setGameState] = useState({
    cellsStack: game.current.cellsStack.slice(),
    gameStatus: game.current.result,
    turn: game.current.guessCount,
    addingOrder: game.current.addingOrder,
  });

  const {
    cellsStack, gameStatus, turn, addingOrder,
  } = gameState;

  // fetch riddle and answer
  useEffect(() => {
    const riddlesSourceURL =
      'https://riddleeey-8000.herokuapp.com/api/v1/riddles/random';

    const fetchRiddle = async () => {
      const response = await fetch(riddlesSourceURL);
      const fetchedRiddle = await response.json();
      const riddleObject = fetchedRiddle[0];

      setRiddle1(riddleObject.body);
      setAnswer(riddleObject.answer);
    };
    fetchRiddle();
  }, []);

  useEffect(() => {
    const keyDownHandler = (event: { key: string }) => {
      // validate before entering branches.
      // console.log(event);

      if (event.key === 'Enter') {
        game.current.makeAGuess();
      } else if (event.key === 'Backspace') {
        game.current.delete();
      } else {
        game.current.add(event.key);
      }

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
  }, [gameState, setGameState]);

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
      />
      <Riddle riddle={riddle1} />
      <Keyboard />
    </MainWrapper>
  );
}

export default App;
