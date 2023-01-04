/*
Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

LeetCode: 1399. Count Largest Group
*/

var countLargestGroup = function(n) {
    let map = new Map();
    let max = 0;
    for(let i = 1; i <= n; i++){
        if(i < 10){
            map.set(i, 1);
            max = Math.max(max, map.get(i))
            continue
        }
        let sum = 0;
        let num = i;
        while(num > 0){
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if(!map.has(sum)) map.set(sum, 1);
        else map.set(sum, map.get(sum) + 1);
        max = Math.max(max, map.get(sum))
    }
    let count = 0;
    for(let [key,value] of map){
        if(max === value) count++;
    }
    return count;
};
countLargestGroup(13)