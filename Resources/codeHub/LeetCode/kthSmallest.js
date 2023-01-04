/*
Given a n x n matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

LeetCode: 378. Kth Smallest Element in a Sorted Matrix
*/

let kthSmallest = function(matrix, k) {
    let i = matrix.length - 1;
    let j = matrix.length;
    let arr = [];
    matrix.map(el => arr.push(...el))
    let swap = (arr, i, j) =>{
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    arr.sort((a,b) => a - b);    
    return arr[k - 1];
//     return arr
};
kthSmallest([
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
8)

kthSmallest([
[1,4,7,11,15],
[2,5,8,12,19],
[3,6,9,16,22],
[10,13,14,17,24],
[18,21,23,26,30]], 
5)