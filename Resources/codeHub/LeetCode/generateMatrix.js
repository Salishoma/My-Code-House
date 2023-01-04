/*
Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

LeetCode: 59. Spiral Matrix II
*/

var generateMatrix = function(n){
    let arr = [];
    if(n <= 0) return arr;
    let t = 0; let b = n - 1; let l = 0; let r = n - 1;
    let k = 1;
    let dir = 0;
    for(let i = 0; i < n; i++){
        // arr[i] = [Array(n).fill(0)];
        arr.push([])
    }
    while(t <= b){
        if(dir === 0){
            for(let i = l; i <= r; i++){
                arr[t][i] = k;
                k++;
            }
            t++;
        }else if(dir === 1){
            for(let i = t; i <= b; i++){
                arr[i][r] = k;
                k++;
            }
            r--;
        }else if(dir === 2){
            for(let i = r; i >= l; i--){
                arr[b][i] = k;
                k++;
            }
            b--;
        }
        else if(dir === 3){
            for(let i = b; i >= t; i--){
                arr[i][l] = k;
                k++;
            }
            l++;
        }
        dir = (dir + 1) % 4;
    }
    return arr;
}

generateMatrix(4)

// [[1,2,3,4],
// [12,13,14,5],
// [11,16,15,6],
// [10,9,8,7]]