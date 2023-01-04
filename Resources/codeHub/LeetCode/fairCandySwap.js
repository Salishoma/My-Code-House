/*
Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

LeetCode: 888. Fair Candy Swap
*/

var fairCandySwap = function(A, B) {
    let set = new Set(B);
    let sumA = A.reduce((a, b) => a + b, 0);
    let sumB = B.reduce((a, b) => a + b, 0);
    let avg = Math.floor((sumB - sumA) / 2);
    let n = A.length;
    let arr = [];
    for(let i = 0; i < n; i++){
        let diff = avg + A[i];
        if(set.has(diff)){
            arr.push(A[i],diff);
            return arr;
        }
    }
};
fairCandySwap([1,1], [2,2])