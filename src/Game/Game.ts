/* eslint-disable no-restricted-syntax */
export interface Cell {
  letter: string | null;
  status?: string;
}

export default class Game {
  cellsStack: Cell[][];

  addingOrder: number;

  guessCount: number;

  guess: string;

  isGuessed: boolean;

  answer: string;

  result: null | string;

  guesses: string[];

  constructor() {
    this.cellsStack = [
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
      [{ letter: null }, { letter: null }, { letter: null }],
    ];

    this.addingOrder = 0;
    this.guessCount = 0;
    this.isGuessed = false;
    this.answer = '';
    this.guess = '';
    this.result = null;
    this.guesses = [];
  }

  // prettier-ignore
  letters = {A: null, B: null, C: null, D: null, E: null, F: null, G: null, H: null, I: null, J: null, K: null, L: null, M:  null, N: null, O: null, P: null, Q: null, R: null, S: null, T: null, U: null, V: null, W: null, X: null, Y: null, Z: null}; // eslint-disable-line

  firstTurnAdd(cellInput: string) {
    if (!this.cellsStack[this.guessCount][this.addingOrder]) {
      this.cellsStack[this.guessCount].push({ letter: cellInput });
    } else {
      this.cellsStack[this.guessCount][this.addingOrder].letter = cellInput;
    }
    this.addingOrder += 1;
  }

  nextTurnAdd(cellInput: string) {
    const isOnLimit = this.addingOrder === this.answer.length;
    if (!isOnLimit) {
      this.cellsStack[this.guessCount][this.addingOrder].letter = cellInput;
      this.addingOrder += 1;
    }
  }

  add(cellInput: string) {
    cellInput = cellInput.toUpperCase();

    const isFirstGuess = this.guessCount === 0;

    if (isFirstGuess) {
      this.firstTurnAdd(cellInput);
    } else {
      this.nextTurnAdd(cellInput);
    }
  }

  handleFirstTurnDelete(lastCell: Cell) {
    if (this.cellsStack[this.guessCount].length > 3) {
      this.cellsStack[this.guessCount].pop();
    } else {
      lastCell.letter = null;
    }
  }

  handleNextTurnDelete(lastCell: Cell) {
    lastCell.letter = null;
  }

  delete() {
    const currentRow = this.cellsStack[this.guessCount];
    if (currentRow[0].letter === null) {
      return;
    }
    const lastcellHasLetter =
      this.cellsStack[this.guessCount][this.addingOrder - 1];

    if (this.guessCount === 0) {
      this.handleFirstTurnDelete(lastcellHasLetter);
    } else {
      this.handleNextTurnDelete(lastcellHasLetter);
    }

    this.addingOrder -= 1;
  }

  handleFirstGuess() {
    const currentRow = this.cellsStack[this.guessCount];

    if (currentRow.length < this.answer.length) {
      while (currentRow.length < this.answer.length) {
        currentRow.push({ letter: null });
      }
    }
    if (currentRow.length > this.answer.length) {
      while (currentRow.length > this.answer.length) {
        currentRow.pop();
      }
    }

    for (const row of this.cellsStack) {
      while (row.length < this.answer.length) {
        row.push({ letter: null });
      }
    }
  }

  makeAGuess() {
    this.guess = this.cellsStack[this.guessCount].reduce((joined, cell) => {
      if (cell.letter) {
        return joined + cell.letter;
      }
      return joined;
    }, '');

    const isSameGuess = this.guesses.indexOf(this.guess) !== -1;

    if (isSameGuess || this.guess.length < 3) {
      return;
    }

    // handle first guess.
    if (this.guessCount === 0) {
      this.handleFirstGuess();
    } else if (this.guess.length !== this.answer.length) {
      return;
    }

    // handle if answer is correct.
    this.isGuessed = this.guess === this.answer.toUpperCase();
    if (this.isGuessed) {
      this.result = 'success';
    }

    // mark cells & keyboard keys correct, present or absent.
    this.cellsStack[this.guessCount].forEach((cell, position) => {
      // for first turn
      if (!cell.letter) {
        return;
      }

      if (cell.letter && this.answer.includes(cell.letter)) {
        if (cell.letter === this.answer[position]) {
          cell.status = 'correct';
          // @ts-ignore
          this.letters[cell.letter] = 'correct';
        } else {
          cell.status = 'present';
          // @ts-ignore
          this.letters[cell.letter] = 'present';
        }
      } else {
        cell.status = 'absent';
        // @ts-ignore
        this.letters[cell.letter] = 'absent';
      }
    });

    this.guessCount += 1;

    // handle last chance.
    if (this.guessCount === 6) {
      this.result = 'failure';
    }

    if (this.isGuessed) {
      this.result = 'success';
    }

    this.guesses.push(this.guess);
    this.addingOrder = 0;
  }
}
