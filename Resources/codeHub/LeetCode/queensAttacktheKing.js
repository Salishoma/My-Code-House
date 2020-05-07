/*
On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.

LeetCode: 1222. Queens That Can Attack the King
*/

var queensAttacktheKing = function(queens, king) {
    const arr = Array.from({length: 8}, () => [0,0,0,0,0,0,0,0]);
    const res = [];
    for(let i = 0; i < queens.length; i++){
        arr[queens[i][0]][queens[i][1]] = 1;
    }
    for(let i = king[1]; i >= 0; i--){
        if(arr[king[0]][i] === 1){
            res.push([king[0], i]);
            break;
        }
    }
    for(let i = king[1]; i < 8; i++){
        if(arr[king[0]][i] === 1){
            res.push([king[0], i]);
            break;
        }
    }
    for(let i = king[0]; i >= 0; i--){
        if(arr[i][king[1]] === 1){
            res.push([i, king[1]]);
            break;
        }
    }
    for(let i = king[0]; i < 8; i++){
        if(arr[i][king[1]] === 1){
            res.push([i, king[1]]);
            break;
        }
    }
    let j = king[1];
    for(let i = king[0]; i >= 0 && j >= 0; i--, j--){
        if(arr[i][j] === 1){
            res.push([i, j]);
            break;
        }
    }
    j = king[1]
    for(let i = king[0]; i < 8 && j < 8; i++, j++){
        if(arr[i][j] === 1){
            res.push([i, j]);
            break;
        }
    }
    j = king[0]
    for(let i = king[1]; i >= 0 && j < 8; i--, j++){
        if(arr[j][i] === 1){
            res.push([j, i]);
            break;
        }
    }
    j = king[0]
    for(let i = king[1]; i < 8 && j >= 0; i++, j--){
        if(arr[j][i] === 1){
            res.push([j, i]);
            break;
        }
    }
    return res;
};
queensAttacktheKing([[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]],[3,3])