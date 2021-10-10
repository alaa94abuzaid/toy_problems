/*
Imagine you are playing a game of tic-tac-toe
and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array,
where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1
if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

const ticTacToe = (arr) => {
  const checkRows = () => {
    let row = [];
    let winner;
    for (i = 0; i < 2; i++) {
      row = arr[i];
      if (row[0] !== row[1] || row[1] !== row[2]) {
        continue;
      } else {
        winner = row[0];
      }
    }
    return winner;
  };

  const checkColumns = () => {
    let column = [];
    let winner;
    for (i = 0; i < 2; i++) {
      column = [arr[0][i], arr[1][i], arr[2][i]];
      if (column[0] !== column[1] || column[1] !== column[2]) {
        continue;
      } else {
        winner = column[0];
      }
    }
    return winner;
  };

  const checkDiag = () => {
    const diags = [
      [arr[0][0], arr[1][1], arr[2][2]],
      [arr[0][2], arr[1][1], arr[2][0]],
    ];
    let winner;
    for (i = 0; i < 2; i++) {
      if (diags[i][0] !== diags[i][1] || diags[i][1] !== diags[i][2]) {
        continue;
      } else {
        winner = diags[i][0];
      }
    }
    return winner;
  };

  rows = checkRows();
  columns = checkColumns();
  diag = checkDiag();
  if (rows) {
    return rows;
  } else if (columns) {
    return columns;
  } else if (diag) {
    return diag;
  } else {
    return -1;
  }
};

describe('Tests', () => {
  it('test solveTic', () => {
    const board = [
      [0, 0, 1],
      [0, 1, 2],
      [2, 1, 0],
    ];
    const solvedBoard = [
      [0, 1, 1],
      [0, 1, 2],
      [2, 1, 2],
    ];

    const solvedBoardDiag = [
      [2, 1, 1],
      [0, 2, 2],
      [2, 1, 2],
    ];

    expect(ticTacToe(board)).toEqual(-1);
    expect(ticTacToe(solvedBoard)).toEqual(1);
    expect(ticTacToe(solvedBoardDiag)).toEqual(2);
  });
});
