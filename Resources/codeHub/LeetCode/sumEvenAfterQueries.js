/*
We have an array A of integers, and an array queries of queries.

For the i-th query val = queries[i][0], index = queries[i][1], we add val to A[index].  Then, the answer to the i-th query is the sum of the even values of A.

(Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array A.)

Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

LeetCode: 985. Sum of Even Numbers After Queries
*/

var sumEvenAfterQueries = function(A, queries) {
    let sum = 0;
    let res = []
    for(let c of A){
        if(c % 2 === 0) sum += c
    }
    let j = 0;
    for(let i = 0; i < queries.length; i++){
        let temp = Math.abs(A[queries[i][1]]);
        A[queries[i][1]] += queries[i][0]
        if(temp % 2 === 0){
            sum -= temp;
        }
        if(A[queries[i][1]] % 2 === 0){
            sum += A[queries[i][1]];
        }
        res[j] = sum;
        j++;
    }
    return res
};
sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]])