import Game from '../Game/Game';

const game = new Game();

describe('Initial state of cells.', () => {
  expect(game.cells).toEqual([
    { letter: null, status: 'empty' },
    { letter: null, status: 'empty' },
    { letter: null, status: 'empty' },
  ]);
});

describe('Handles adding new letter.', () => {
  game.push('W');
  xtest('Add first letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: null },
      { letter: null },
    ]);
  });
  game.push('O');
  xtest('Add second letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: null },
    ]);
  });
  game.push('R');
  xtest('Add third letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
      { letter: null },
    ]);
  });
  game.push('R');
  xtest('Add fourth letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
      { letter: 'D' },
      { letter: null },
    ]);
  });
});

describe('Handles removing letters.', () => {
  game.pop();
  xtest('Remove first letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: 'R' },
      { letter: null },
    ]);
  });
  game.pop();
  xtest('Remove second letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: 'O' },
      { letter: null },
    ]);
  });
  game.pop();
  xtest('Remove third letter.', () => {
    expect(game.cells).toEqual([
      { letter: 'W' },
      { letter: null },
      { letter: null },
    ]);
  });
  game.pop();
  xtest('Remove fourth letter.', () => {
    expect(game.cells).toEqual([
      { letter: null },
      { letter: null },
      { letter: null },
    ]);
  });
});

describe('Joins cells to word.', () => {
  game.add('W');
  game.add('I');
  game.add('N');
  game.add('D');
  game.join();
  xtest('Joins W, I, N, D to WIND', () => {
    expect(game.word).toBe('WIND');
  });
  game.add('R');
  game.add('E');
  game.add('A');
  game.add('C');
  game.add('T');
  game.join();
  xtest('Joins R, E, A, C, T to REACT', () => {
    expect(game.word).toBe('REACT');
  });
});

describe('Checks letters against answer.', () => {
  game.answer = 'WIND';
  game.word = 'WORD';
  xtest('Checks WORD agains WIND', () => {
    expect(game.isGuessed).toBe(false);
  });
  game.word = 'WIND';
  xtest('Checks WIND agains WIND', () => {
    expect(game.isGuessed).toBe(true);
  });
  game.word = 'ASK';
  xtest('Checks if word is smaller than answer.', () => {
    expect(game.isGuessed).toBe(false);
  });
  game.word = 'DISTILLATION';
  xtest('Checks if word is longer than answer.', () => {
    expect(game.isGuessed).toBe(false);
  });
});

describe('After checking, marks cells accordingly', () => {
  /**
   * length --> equal, shorter, longer
   */
  game.word = 'QUICK';
  game.answer = 'QUICK';
  xtest('Can mark letters correct.', () => {
    expect(game.cells).toEqual([
      { letter: 'Q', status: 'correct' },
      { letter: 'U', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'C', status: 'correct' },
      { letter: 'K', status: 'correct' },
    ]);
  });
  game.word = 'INBOX';
  game.answer = 'XINBO';
  xtest('Can mark letters present.', () => {
    expect(game.cells).toEqual([
      { letter: 'I', status: 'present' },
      { letter: 'N', status: 'present' },
      { letter: 'B', status: 'present' },
      { letter: 'O', status: 'present' },
      { letter: 'X', status: 'present' },
    ]);
  });
  game.word = 'QUICK';
  game.answer = 'BLAZE';
  xtest('Can mark letters absent.', () => {
    expect(game.cells).toEqual([
      { letter: 'Q', status: 'absent' },
      { letter: 'U', status: 'absent' },
      { letter: 'I', status: 'absent' },
      { letter: 'C', status: 'absent' },
      { letter: 'K', status: 'absent' },
    ]);
  });
  game.word = 'PIXEL';
  game.answer = 'PIXIE';
  xtest('Can mark letters mixed.', () => {
    expect(game.cells).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: 'L', status: 'absent' },
    ]);
  });
});

describe('Can check shorter words.', () => {
  game.word = 'PIX';
  game.answer = 'PIXIE';
  xtest('Checks PIX against PIXIE.', () => {
    expect(game.cells).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: null, status: 'empty' },
      { letter: null, status: 'empty' },
    ]);
  });
  game.word = 'AXE';
  game.answer = 'AXLE';
  xtest('Checks PIX against PIXIEd.', () => {
    expect(game.cells).toEqual([
      { letter: 'A', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: null, status: 'empty' },
    ]);
  });
});

describe('Can check longer words.', () => {
  game.word = 'PIXALATED';
  game.answer = 'PIXIE';
  xtest('Checks PIX against PIXIE.', () => {
    expect(game.cells).toEqual([
      { letter: 'P', status: 'correct' },
      { letter: 'I', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'A', status: 'absent' },
      { letter: 'L', status: 'absent' },
    ]);
  });
  game.word = 'AXEOFLOKI';
  game.answer = 'AXLEO';
  xtest('Checks PIX against PIXIEd.', () => {
    expect(game.cells).toEqual([
      { letter: 'A', status: 'correct' },
      { letter: 'X', status: 'correct' },
      { letter: 'E', status: 'present' },
      { letter: 'O', status: 'present' },
      { letter: 'F', status: 'absent' },
    ]);
  });
});

xtest("Doesn't check if first guess is done and shorter.", () => {
  expect(1).toEqual(1);
});
