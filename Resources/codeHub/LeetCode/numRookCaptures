/*
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

LeetCode: 999. Available Captures for Rook
*/

var numRookCaptures = function(board) {
    let count = 0;
    let k, l;
    let moveLeft = true, moveRight = true;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === "R"){
                k = j;
                l = i;
                break;
            }
        }
        if(k !== undefined) break;
    }
    let i = k - 1, j = k + 1; let count1 = 0, count2 = 0;
    while(i >= 0 || j < board[l].length){
        if(moveLeft){
            if(i === -1 || board[l][i] === "B") moveLeft = !moveLeft;
            else if(board[l][i] === "p" && count1 < 1) count1++;
        }
        if(moveRight){
            if(j === board[l].length || board[l][j] === "B") moveRight = !moveRight;
            else if(board[l][j] === "p" && count2 < 1) count2++;
        }
        if(moveLeft === false && moveRight === false) break;
        i--; j++;
    }
    count = count1 + count2;
    i = l - 1, j = l + 1;
    let moveUp = true, moveDown = true; count1 = 0, count2 = 0;
    while(i >= 0 || j < board.length){
        if(moveUp){
            if(i === -1 || board[i][k] === "B") moveUp = !moveUp;
            else if(board[i][k] === "p" && count1 < 1) count1++;
        }
        if(moveDown){
            if(j === board.length || board[j][k] === "B") moveDown = !moveDown;
            else if(board[j][k] === "p" && count2 < 1) count2++;
            
        }
        if(moveUp === false && moveDown === false) break;
        i--; j++;
    }
    count += count1 + count2
    return count;
};
numRookCaptures([[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]])