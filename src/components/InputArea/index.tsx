/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Game from '../../Game/Game';

import {
  Container, Row, Cell, PlayAgainButton,
} from './styles';
import DecorativeCells from './DecorativeCells';

interface InputAreaProps {
  answer: string;
}

function InputArea({ answer }: InputAreaProps) {
  // console.log('InputArea is rendered');

  const game = useRef(new Game());
  game.current.answer = answer.toUpperCase();

  const [cellsStack, setCellsStack] = useState([
    ...game.current.cellsStack.slice(),
  ]);
  const [gameStatus, setGameStatus] = useState<null | string>(null);
  const [turn, setTurn] = useState(0);
  const currentOrder = game.current.addingOrder + 2;
  const [addingOrder, setAddingOrder] = useState(currentOrder);

  const handleNewGame = () => {
    game.current = new Game();
    // console.log(game.current.cellsStack);
    setCellsStack(game.current.cellsStack);
  };

  useEffect(() => {
    const keyDownHandler = (event: { key: string }) => {
      if (event.key === 'Enter') {
        game.current.makeAGuess();
        const guessCountClone = game.current.guessCount;
        setTurn(guessCountClone);
      } else if (event.key === 'Backspace') {
        game.current.delete();
      } else {
        game.current.add(event.key);
      }
      setCellsStack(game.current.cellsStack.slice());
      const resultClone = game.current.result;
      setGameStatus(resultClone);
      const addingOrderClone = game.current.addingOrder;
      if (game.current.addingOrder >= 4) {
        setAddingOrder(addingOrderClone + 2);
      }
    };
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [addingOrder, turn, gameStatus, cellsStack]);

  return (
    <Container turn={turn} gameStatus={gameStatus}>
      {cellsStack.map((row, rowIndex) => (
        <Row turn={turn} key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div key={uuidv4()} style={{ display: 'flex' }}>
              {/* please extract me as wrapper ;/ */}
              <Cell
                turn={turn}
                key={`${rowIndex}${cellIndex}`}
                status={cell.status}
              >
                {cell.letter}
              </Cell>
              {turn === 0 && cellIndex >= addingOrder && rowIndex === 0 && (
                <DecorativeCells />
              )}
            </div>
          ))}
        </Row>
      ))}
      <div
        style={{
          fontSize: '40px',
          fontWeight: '700',
        }}
      >
        {gameStatus}
        {' '}
        {gameStatus && game.current.answer}
        {gameStatus === 'success' && (
          <Row>
            {game.current.cellsStack[turn - 1].map((cell) => (
              <Cell status={cell.status} key={uuidv4()}>
                {cell.letter}
              </Cell>
            ))}
          </Row>
        )}
        <br />
        {gameStatus && (
          <PlayAgainButton onClick={() => handleNewGame()}>
            New Game
          </PlayAgainButton>
        )}
      </div>
    </Container>
  );
}

export default InputArea;
