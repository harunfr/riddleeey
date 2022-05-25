/* eslint-disable no-restricted-syntax */
interface Cell {
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
    this.guess = '';
    this.isGuessed = false;
    this.answer = '';
    this.result = null;
    this.guesses = [];
  }

  add(cellInput: string) {
    const currentRow: Cell[] = this.cellsStack[this.guessCount];
    const currentCell = currentRow[this.addingOrder];

    if (!currentCell) {
      currentRow.push({ letter: cellInput });
    } else {
      currentCell.letter = cellInput;
    }

    this.addingOrder += 1;
  }

  delete() {
    const currentRow = this.cellsStack[this.guessCount];
    const firstCell = currentRow[0];
    if (!firstCell.letter) {
      return;
    }

    this.addingOrder -= 1;

    for (let index = currentRow.length - 1; index >= 0; index -= 1) {
      if (currentRow.length > 3) {
        currentRow.pop();
        return;
      }
      if (currentRow[index].letter) {
        currentRow[index].letter = null;
        return;
      }
    }
  }

  makeAGuess() {
    this.guess = '';
    const currentRow = this.cellsStack[this.guessCount];
    this.guess = currentRow.reduce((joined, cell) => {
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

    // handle if answer is correct.
    this.isGuessed = this.guess === this.answer;
    if (this.isGuessed) {
      this.result = 'success';
    }

    this.guessCount += 1;

    if (this.guessCount > 5) {
      this.result = 'failure';
    }

    // mark cells correct, present or absent.
    currentRow.forEach((cell, position) => {
      if (!cell.letter) {
        return;
      }
      if (cell.letter && this.answer.includes(cell.letter)) {
        if (cell.letter === this.answer[position]) {
          cell.status = 'correct';
        } else {
          cell.status = 'present';
        }
      } else {
        cell.status = 'absent';
      }
    });
    this.guesses.push(this.guess);
    this.addingOrder = 0;
  }
}
