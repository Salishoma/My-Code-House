var longestSubsequence = function(arr, difference) {
    let map = new Map();
    let map2 = new Map();
    let max = 1;
    let max1 = 1;
    for(let num of arr){
        if(!map.has(num)) map.set(num, 1);
        else map.set(num, map.get(num) + 1);
        max1 = Math.max(map.get(num), max1);
        map2.set(num, 1);
    }
    if(difference === 0) return max1;
    for(let num of arr){
        if(map.has(num + difference)){
            map2.set(num + difference, map2.get(num) + 1);
            max = Math.max(map2.get(num + difference), max);
        }
        map.set(num, map.get(num) - 1);
        if(map.get(num) === 0) map.delete(num);
    }
    return max;
};
longestSubsequence([-6,6,-8,0,7,-8,5,-7,10,-10],-6)