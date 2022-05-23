import Game from '../Game/Game';

// describe('', () => {})
//   test('', () => {})
// expect(WWW).toBe(WWW)

const game = new Game();

describe('Initial state of cells.', () => {
  expect(game.cells).toEqual([
    { letter: null },
    { letter: null },
    { letter: null },
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
// describe('', () => {})
//   test('', () => {})
// expect(WWW).toBe(WWW)

describe('Checks letters against answer.', () => {});

/**
 * these
 * push pop enter
 */
