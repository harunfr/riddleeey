import Game from '../Game/Game';

// helper method for tests.
function pushAll(guess, gameObject) {
  const letters = guess.split('');
  letters.forEach((letter) => {
    gameObject.add(letter);
  });
}

// to see all test descriptions
test('Riddle Wordle Tests', () => {
  expect(1).toBe(1);
});

describe('Initial state of cells.', () => {
  const game = new Game();

  test('Handles initial state of cells.', () => {
    expect(game.cellsStack).toEqual([
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
    ]);
  });
});

describe('Adding and removing letters.', () => {
  const game = new Game();
  test('Handles adding first letter.', () => {
    game.add('W');
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: null },
      { letter: null },
    ]);
  });

  test('Handles adding second letter.', () => {
    game.add('O');
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: null },
    ]);
  });

  test('Handles adding third letter.', () => {
    const firstCell = game.cellsStack[0];
    game.add('R');
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
    ]);
  });

  test('Handles adding fourth letter.', () => {
    game.add('D');
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
      { letter: 'D' },
    ]);
  });

  test('Handles removing first letter.', () => {
    game.delete();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
    ]);
  });

  test('Handles removing second letter.', () => {
    game.delete();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: null },
    ]);
  });

  test('Handles removing third letter.', () => {
    game.delete();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'W' },
      { letter: null },
      { letter: null },
    ]);
  });

  test('Handles removing fourth letter.', () => {
    game.delete();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: null },
      { letter: null },
      { letter: null },
    ]);
  });
});

describe('Merging cells to make a guess.', () => {
  test('Handles joining W, I, N, D to WIND.', () => {
    const game = new Game();
    game.answer = 'WIND';
    pushAll('WIND', game);
    game.makeAGuess();
    expect(game.guess).toBe('WIND');
  });

  test('Handles joining R, E, A, C, T to REACT.', () => {
    const game = new Game();
    game.answer = 'REACT';
    pushAll('REACT', game);
    game.makeAGuess();
    expect(game.guess).toBe('REACT');
  });
});

describe('Checking guess against answer in first turn.', () => {
  test('Handles checking WORD agains WIND.', () => {
    const game = new Game();
    game.answer = 'WIND';
    pushAll('WORD', game);
    game.makeAGuess();
    expect(game.isGuessed).toBe(false);
  });

  test('Handles checking WIND agains WIND.', () => {
    const game = new Game();
    game.answer = 'WIND';
    pushAll('WIND', game);
    game.makeAGuess();
    expect(game.isGuessed).toBe(true);
  });

  test('Handles game result.', () => {
    const game = new Game();
    game.answer = 'WIND';
    pushAll('WIND', game);
    game.makeAGuess();
    expect(game.result).toBe('success');
  });

  test('Handles checking if word is shorter than answer.', () => {
    const game = new Game();
    game.answer = 'WIND';
    pushAll('ASK', game);
    game.makeAGuess();
    expect(game.isGuessed).toBe(false);
  });

  test('Handles checking if word is longer than answer.', () => {
    const game = new Game();
    game.answer = 'WIND';
    pushAll('DISTILLATION', game);
    game.makeAGuess();
    expect(game.isGuessed).toBe(false);
  });
});

describe('After checking, marks cells accordingly.', () => {
  test('Handles marking letters correct.', () => {
    const game = new Game();
    game.answer = 'QUICK';
    pushAll('QUICK', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'Q', status: 'correct' },
      { letter: 'U', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'C', status: 'correct' },
      { letter: 'K', status: 'correct' },
    ]);
  });

  test('Handles marking letters present.', () => {
    const game = new Game();
    game.answer = 'XINBO';
    pushAll('INBOX', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'I', status: 'present' },
      { letter: 'N', status: 'present' },
      { letter: 'B', status: 'present' },
      { letter: 'O', status: 'present' },
      { letter: 'X', status: 'present' },
    ]);
  });

  test('Handles marking letters absent.', () => {
    const game = new Game();
    game.answer = 'BLAZE';
    pushAll('QUICK', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'Q', status: 'absent' },
      { letter: 'U', status: 'absent' },
      { letter: 'I', status: 'absent' },
      { letter: 'C', status: 'absent' },
      { letter: 'K', status: 'absent' },
    ]);
  });

  test('Handles marking letters correct, present and absent together.', () => {
    const game = new Game();
    game.answer = 'PIXIE';
    pushAll('PIXEL', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: 'L', status: 'absent' },
    ]);
  });
});

describe('Checking shorter and longer guesses.', () => {
  test('Handles checking PIX against PIXIE.', () => {
    const game = new Game();
    game.answer = 'PIXIE';
    pushAll('PIX', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: null },
      { letter: null },
    ]);
  });

  test('Handles checking AXE against AXLE.', () => {
    const game = new Game();
    game.answer = 'AXLE';
    pushAll('AXE', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'A', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: null },
    ]);
  });

  test('Handles checking PIXALATED against PIXIE.', () => {
    const game = new Game();
    game.answer = 'PIXIE';
    pushAll('PIXALATED', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'A', status: 'absent' },
      { letter: 'L', status: 'absent' },
    ]);
  });

  test('Handles checking AXEOFLOKI against AXLEO.', () => {
    const game = new Game();
    game.answer = 'AXLEO';
    pushAll('AXEOFLOKI', game);
    game.makeAGuess();
    const firstCell = game.cellsStack[0];
    expect(firstCell).toEqual([
      { letter: 'A', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: 'O', status: 'present' },
      { letter: 'F', status: 'absent' },
    ]);
  });
});

describe('Handling invalid inputs.', () => {
  test("Can't enter previous answer again", () => {
    const game = new Game();
    game.answer = 'ASK';
    game.add('H');
    game.add('E');
    game.add('Y');
    // pushAll('HEY', game);
    game.makeAGuess();
    game.add('H');
    game.add('E');
    game.add('Y');
    // pushAll('HEY', game);
    game.makeAGuess();
    expect(game.guessCount).toBe(1);
  });

  test("Can't enter any previous answer again.", () => {
    const game = new Game();
    game.answer = 'ASK';
    pushAll('HEY', game);
    game.makeAGuess();
    pushAll('FOX', game);
    game.makeAGuess();
    pushAll('HEY', game);
    game.makeAGuess();
    expect(game.guessCount).toBe(2);
  });

  test('Handles making first guess shorter than three.', () => {
    const game = new Game();
    game.answer = 'ASK';
    game.add('A');
    game.makeAGuess();
    expect(game.guessCount).toBe(0);
  });

  test('Handles making a guess having empty cell after the first guess.', () => {
    const game = new Game();
    game.answer = 'ASK';
    pushAll('ALL', game);
    game.makeAGuess(); // guessCount becomes 1
    game.add('A');
    game.add('S');
    game.makeAGuess();
    expect(game.guessCount).toBe(1);
  });
});

describe('Usual gameplay.', () => {
  const game = new Game();
  game.answer = 'WORDLE';

  test('Handles stack of cells.', () => {
    game.add('W');
    game.add('O');
    game.add('T');
    game.delete();
    game.add('R');
    game.add('R');
    game.add('Y');
    game.makeAGuess();
    expect(game.cellsStack).toEqual([
      [
        { letter: 'W', status: 'correct' },
        { letter: 'O', status: 'correct' },
        { letter: 'R', status: 'correct' },
        { letter: 'R', status: 'present' },
        { letter: 'Y', status: 'absent' },
        { letter: null },
      ],
      [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
    ]);
  });

  test('Handles wrong guess.', () => {
    game.isGuessed = false;
  });

  test('Handles guess count.', () => {
    game.guessCount = 1;
  });

  test('Handles correct guess.', () => {
    pushAll('WORDLE', game);
    game.makeAGuess();
    expect(game.isGuessed).toBe(true);
  });

  test('Handles game result.', () => {
    game.result = 'success';
  });

  test('Handles guess count for more guesses.', () => {
    game.guessCount = 2;
  });

  test('Handles unsuccessful game play.', () => {
    const game = new Game();
    game.answer = 'ASK';
    pushAll('WHO', game);
    game.makeAGuess();
    pushAll('LET', game);
    game.makeAGuess();
    pushAll('THE', game);
    game.makeAGuess();
    pushAll('DOGS', game);
    game.makeAGuess();
    pushAll('OUT', game);
    game.makeAGuess();
    pushAll('MIC', game);
    game.makeAGuess();
    expect(game.result).toBe('failure');
  });
});
