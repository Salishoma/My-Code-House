/*
Starting with a positive integer N, we reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this in a way such that the resulting number is a power of 2.

LeetCode: 869. Reordered Power of 2
*/

var reorderedPowerOf2 = function(N) {
    if(N === 1) return true;
    const map = new Map();
    const digit = N => {
        let count = 0
        while(N > 0){
            let rem = N % 10;
            if(!map.has(rem)) map.set(rem, 1);
            else map.set(rem, map.get(rem) + 1)
            N = Math.floor(N / 10);
            count++;
        }
        return count;
    }
    let count = digit(N);
    const arr = [];
    for(let i = 0; i < 31; i++){
        let pow = Math.pow(2,i);
        let count2 = Math.floor(Math.log10(pow)) + 1;
        if(count2 === count) arr.push(pow);
        else if(count2 > count) break;
    }
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        const newMap = new Map(map);
        while(num > 0){
            let rem = num % 10;
            if(!newMap.has(rem)) break;
            else{
                newMap.set(rem, map.get(rem) - 1);
                if(newMap.get(rem) === 0){
                    newMap.delete(rem); 
                }
            }
            num = Math.floor(num / 10);
        }
        if(num === 0) return true;
    }
    return false;
};
reorderedPowerOf2(268341)