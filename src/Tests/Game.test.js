import Game from '../Game/Game';

// helper method for tests.
function pushAll(guess, gameObject) {
  const letters = guess.split('');
  letters.forEach((letter) => {
    gameObject.push(letter);
  });
}

// to see all test descriptions
test('Riddle Wordle Tests', () => {
  expect(1).toBe(1);
});

describe('Initial state of cells.', () => {
  const game = new Game();
  xtest('Handles initial state of cells.', () => {
    expect(game.cellsStack.first).toEqual({
      first: [{ letter: null }, { letter: null }, { letter: null }],
      second: [{ letter: null }, { letter: null }, { letter: null }],
      third: [{ letter: null }, { letter: null }, { letter: null }],
      fourth: [{ letter: null }, { letter: null }, { letter: null }],
      fifth: [{ letter: null }, { letter: null }, { letter: null }],
      sixth: [{ letter: null }, { letter: null }, { letter: null }],
    });
  });
});

describe('Adding and removing letters.', () => {
  const game = new Game();
  xtest('Handles adding first letter.', () => {
    game.push('W');
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: null },
      { letter: null },
    ]);
  });

  xtest('Handles adding second letter.', () => {
    game.push('O');
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: null },
    ]);
  });

  xtest('Handles adding third letter.', () => {
    game.push('R');
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
    ]);
  });

  xtest('Handles adding fourth letter.', () => {
    game.push('D');
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
      { letter: 'D' },
    ]);
  });

  xtest('Handles removing first letter.', () => {
    game.pop();
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
    ]);
  });

  xtest('Handles removing second letter.', () => {
    game.pop();
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: null },
    ]);
  });

  xtest('Handles removing third letter.', () => {
    game.pop();
    expect(game.cellsStack.first).toEqual([
      { letter: 'W' },
      { letter: null },
      { letter: null },
    ]);
  });

  xtest('Handles removing fourth letter.', () => {
    game.pop();
    expect(game.cellsStack.first).toEqual([
      { letter: null },
      { letter: null },
      { letter: null },
    ]);
  });
});

describe('Merging cells to make a guess.', () => {
  const game = new Game();

  xtest('Handles joining W, I, N, D to WIND.', () => {
    pushAll('WIND', game);
    game.makeAGuess();
    expect(game.guess).toBe('WIND');
  });

  xtest('Handles joining R, E, A, C, T to REACT.', () => {
    pushAll('REACT', game);
    game.makeAGuess();
    expect(game.guess).toBe('REACT');
  });
});

describe('Checking guess against answer in first turn.', () => {
  beforeEach(() => {
    game = new Game();
  });

  xtest('Handles checking WORD agains WIND.', () => {
    game.guess = 'WORD';
    game.makeAGuess();
    expect(game.isGuessed).toBe(false);
  });

  xtest('Handles checking WIND agains WIND.', () => {
    game.guess = 'WIND';
    game.makeAGuess();
    expect(game.isGuessed).toBe(true);
  });

  xtest('Handles game result.', () => {
    game.guess = 'WIND';
    game.makeAGuess();
    expect(game.result).toBe('success');
  });

  xtest('Handles checking if word is shorter than answer.', () => {
    game.answer = 'WIND';
    game.guess = 'ASK';
    game.makeAGuess();
    expect(game.isGuessed).toBe(false);
  });

  xtest('Handles checking if word is longer than answer.', () => {
    game.answer = 'WIND';
    game.guess = 'DISTILLATION';
    game.makeAGuess();
    expect(game.isGuessed).toBe(false);
  });
});

describe('After checking, marks cells accordingly.', () => {
  beforeEach(() => {
    game = new Game();
  });

  xtest('Handles marking letters correct.', () => {
    game.answer = 'QUICK';
    pushAll('QUICK', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'Q', status: 'correct' },
      { letter: 'U', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'C', status: 'correct' },
      { letter: 'K', status: 'correct' },
    ]);
  });

  xtest('Handles marking letters present.', () => {
    game.answer = 'XINBO';
    pushAll('INBOX', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'I', status: 'present' },
      { letter: 'N', status: 'present' },
      { letter: 'B', status: 'present' },
      { letter: 'O', status: 'present' },
      { letter: 'X', status: 'present' },
    ]);
  });

  xtest('Handles marking letters absent.', () => {
    game.answer = 'BLAZE';
    pushAll('QUICK', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'Q', status: 'absent' },
      { letter: 'U', status: 'absent' },
      { letter: 'I', status: 'absent' },
      { letter: 'C', status: 'absent' },
      { letter: 'K', status: 'absent' },
    ]);
  });

  xtest('Handles marking letters correct, present and absent together.', () => {
    game.answer = 'PIXIE';
    pushAll('PIXEL', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: 'L', status: 'absent' },
    ]);
  });
});

describe('Checking shorter and longer guesses.', () => {
  beforeEach(() => {
    game = new Game();
  });

  xtest('Handles checking PIX against PIXIE.', () => {
    game.answer = 'PIXIE';
    pushAll('PIX', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: null },
      { letter: null },
    ]);
  });

  xtest('Handles checking AXE against AXLE.', () => {
    game.answer = 'AXLE';
    pushAll('AXE', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'A', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: null },
    ]);
  });

  xtest('Handles checking PIXALATED against PIXIE.', () => {
    game.answer = 'PIXIE';
    pushAll('PIXALATED', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'A', status: 'absent' },
      { letter: 'L', status: 'absent' },
    ]);
  });

  xtest('Handles checking AXEOFLOKI against AXLEO.', () => {
    game.answer = 'AXLEO';
    pushAll('AXEOFLOKI', game);
    game.makeAGuess();
    expect(game.cellsStack.first).toEqual([
      { letter: 'A', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: 'O', status: 'present' },
      { letter: 'F', status: 'absent' },
    ]);
  });
});

describe('Handling invalid inputs.', () => {
  beforeEach(() => {
    game = new Game();
  });

  xtest("Can't enter previous answer again", () => {
    game.answer = 'ASK';
    pushAll('HEY');
    game.makeAGuess();
    pushAll('HEY');
    game.makeAGuess();
    expect(game.guessCount).toBe(1);
  });

  xtest("Can't enter any previous answer again.", () => {
    game.answer = 'ASK';
    pushAll('HEY');
    game.makeAGuess();
    pushAll('FOX');
    game.makeAGuess();
    pushAll('HEY');
    game.makeAGuess();
    expect(game.guessCount).toBe(2);
  });

  xtest('Handles making first guess shorter than three.', () => {
    game.answer = 'ASK';
    game.push('A');
    game.makeAGuess();
    expect(game.guessCount).toBe(0);
  });

  xtest('Handles making a guess having empty cell after the first guess.', () => {
    game.answer = 'ASK';
    pushAll('ALL');
    game.makeAGuess(); // guessCount becomes 1
    game.push('A');
    game.push('S');
    game.makeAGuess();
    expect(game.guessCount).toBe(1);
  });
});

describe('Usual gameplay.', () => {
  const game = new Game();
  game.answer = 'WORDLE';

  xtest('Handles stack of cells.', () => {
    game.push('W');
    game.push('O');
    game.push('T');
    game.pop();
    game.push('R');
    game.push('R');
    game.push('Y');
    game.makeAGuess();
    expect(game.cellsStack).toEqual({
      first: [
        { letter: 'W', status: 'correct' },
        { letter: 'O', status: 'correct' },
        { letter: 'R', status: 'correct' },
        { letter: 'R', status: 'present' },
        { letter: 'Y', status: 'absent' },
        { letter: null },
      ],
      second: [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      third: [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      fourth: [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      fifth: [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
      sixth: [
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
        { letter: null },
      ],
    });
  });

  xtest('Handles wrong guess.', () => {
    game.isGuessed = false;
  });

  xtest('Handles guess count.', () => {
    game.guessCount = 1;
  });

  xtest('Handles correct guess.', () => {
    pushAll('WORDLE');
    game.makeAGuess();
    expect(game.isGuessed).toBe(true);
  });

  xtest('Handles game result.', () => {
    game.result = 'success';
  });

  xtest('Handles guess count for more guesses.', () => {
    game.guessCount = 2;
  });

  xtest('Handles unsuccessful game play.', () => {
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
