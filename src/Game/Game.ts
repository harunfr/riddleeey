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
    this.isGuessed = false;
    this.answer = '';
    this.guess = '';
    this.result = null;
    this.guesses = [];
  }

  public get currentRow(): Cell[] {
    return this.cellsStack[this.guessCount];
  }

  public get currentCell(): Cell {
    return this.currentRow[this.addingOrder];
  }

  firstTurnAdd(cellInput: string) {
    if (!this.currentCell) {
      this.currentRow.push({ letter: cellInput });
    } else {
      this.currentCell.letter = cellInput;
    }
    this.addingOrder += 1;
  }

  nextTurnAdd(cellInput: string) {
    const isOnLimit = this.addingOrder === this.answer.length;
    if (!isOnLimit) {
      this.currentCell.letter = cellInput;
      this.addingOrder += 1;
    }
  }

  isValidInput(input: string) {
    const onlyLetterRegex = /^[a-zA-Z]$/;
    const isValid: boolean = onlyLetterRegex.test(input);
    return isValid;
  }

  add(cellInput: string) {
    cellInput = cellInput.toUpperCase();
    const hasRoomForLetter = this.addingOrder < 8;
    if (!hasRoomForLetter || !this.isValidInput(cellInput)) {
      return;
    }

    const isFirstGuess = this.guessCount === 0;

    if (isFirstGuess) {
      this.firstTurnAdd(cellInput);
    } else {
      this.nextTurnAdd(cellInput);
    }
  }

  handleFirstTurnDelete(lastCell: Cell) {
    if (this.currentRow.length > 3) {
      this.currentRow.pop();
    } else {
      lastCell.letter = null;
    }
  }

  handleNextTurnDelete(lastCell: Cell) {
    lastCell.letter = null;
  }

  delete() {
    const currentRow = this.currentRow;
    if (currentRow[0].letter === null) {
      return;
    }
    const lastcellHasLetter = this.currentRow[this.addingOrder - 1];

    if (this.guessCount === 0) {
      this.handleFirstTurnDelete(lastcellHasLetter);
    } else {
      this.handleNextTurnDelete(lastcellHasLetter);
    }

    this.addingOrder -= 1;
  }

  handleFirstGuess() {
    const currentRow = this.currentRow;

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
    this.guess = this.currentRow.reduce((joined, cell) => {
      if (cell.letter) {
        return joined + cell.letter;
      }
      return joined;
    }, '');

    const currentRow = this.currentRow;

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
