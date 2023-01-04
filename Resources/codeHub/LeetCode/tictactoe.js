/*
Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player A always places "X" characters, while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

LeetCode: 1275. Find Winner on a Tic Tac Toe Game
*/

var tictactoe = function(moves) {
   let winMoves = [[0,1,2],[10,11,12],[20,21,22],[0,10,20],[1,11,21],[2,12,22],
              [0,11,22],[2,11,20]];
    let setA = new Set();
    let setB = new Set();
    for(let i = 0; i < moves.length; i++){
        if(i % 2 === 0) setA.add(parseInt(`${moves[i][0]}${moves[i][1]}`));
        else setB.add(parseInt(`${moves[i][0]}${moves[i][1]}`));
    }
    for(let x of winMoves){
        if(setA.has(x[0]) && setA.has(x[1]) && setA.has(x[2])) return "A";
        else if(setB.has(x[0]) && setB.has(x[1]) && setB.has(x[2])) return "B";
    }
    return moves.length === 9 ? "Draw" : "Pending"
};
tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])