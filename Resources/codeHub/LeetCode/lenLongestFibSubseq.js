var lenLongestFibSubseq = function(A) {
    const set = new Set(A);
    let max = 0;
    for(let i = 0; i < A.length - 1; i++){
        let count = 1;
        for(let j = i + 1; j < A.length; j++){
            if(set.has(A[i] + A[j])){
                let sum = A[i] + A[j];
                let temp = A[i];
                count++;
                while(set.has(sum)){
                    let diff = sum - temp;
                    sum += diff;
                    temp = diff;
                    count++;
                }
            }
            max = Math.max(max, count);
            count = 1;
        }
    }
    return max >= 3 ? max : 0;
};
lenLongestFibSubseq([1,2,3,4,5,6,7,8])