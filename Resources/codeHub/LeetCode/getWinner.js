/*
Given an integer array arr of distinct integers and an integer k.

A game will be played between the first two elements of the array (i.e. arr[0] and arr[1]). In each round of the game, we compare arr[0] with arr[1], the larger integer wins and remains at position 0 and the smaller integer moves to the end of the array. The game ends when an integer wins k consecutive rounds.

Return the integer which will win the game.

It is guaranteed that there will be a winner of the game.

LeetCode: 1535. Find the Winner of an Array Game
*/

var getWinner = function(arr, k) {
    let count = 0;
    let j = 0;
    let cur = arr[0];
    let l = arr.length
    for(let i = 1; i < l; i++){
        if(arr[i] > cur){
            count = 0;
            cur = arr[i]
        }
        if(++count === k) return cur;
    }
    return cur;
};
getWinner([2,1,3,5,4,6,7], 2)