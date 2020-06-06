/*
Given an integer array arr. You have to sort the integers in the array in ascending order by the number of 1's in their binary representation and in case of two or more integers have the same number of 1's you have to sort them in ascending order.

Return the sorted array.

LeetCode: 1356. Sort Integers by The Number of 1 Bits
*/

var sortByBits = function(arr) {
    const countBits = {};
    for(let num of arr){
        let x = num;
        let count = 0;
        while(x > 0){
            if(x % 2) count++;
            x = Math.floor(x / 2);
        }
        countBits[num] = count;
    }
    arr.sort((a, b) => {
        if(countBits[a] === countBits[b]) return a - b;
        return countBits[a] - countBits[b]
    })
    return arr;
};
sortByBits([1024,512,256,128,64,32,16,8,4,2,1])