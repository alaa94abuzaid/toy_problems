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
      for (j = 0; j < 2; j++) {
        row = arr[i];
        if (row[j] !== row[j + 1]) {
          break;
        } else {
          winner = row[j];
        }
      }
    }
    return winner;
  };

  const checkColumns = () => {
    let column = [];
    let winner;
    for (i = 0; i < 2; i++) {
      for (j = 0; j < 2; j++) {
        column = [arr[0][i], arr[1][i], arr[2][i]];
        if (column[j] !== column[j + 1]) {
          break;
        } else {
          winner = column[j];
        }
      }
    }
    return winner;
  };

  //   const checkDiag = () => {
  //     const diags = [
  //       [arr[0][0], arr[1][1], arr[2][2]],
  //       [arr[0][2], arr[1][1], arr[2][0]],
  //     ];
  //     console.log('diags', diags);
  //     let winner;
  //     for (i = 0; i < 2; i++) {
  //       for (j = 0; j < 2; j++) {
  //         if (diags[i][j] !== diags[i][j + 1]) {
  //           break;
  //         } else {
  //           winner = diags[i][j];
  //         }
  //       }
  //     }
  //     return winner;
  //   };

  rows = checkRows();
  columns = checkColumns();
  if (rows) {
    return rows;
  } else if (columns) {
    return columns;
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

    expect(ticTacToe(board)).toEqual(-1);
    expect(ticTacToe(solvedBoard)).toEqual(1);
  });
});
