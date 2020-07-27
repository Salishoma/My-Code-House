var numSplits = function(s) {
    const map = new Map();
    const set = new Set();
    for(let str of s){
        if(!map.has(str)) map.set(str, 1);
        else map.set(str, map.get(str) + 1);
    }
    let count = 0;
    for(let str of s){
        set.add(str);
        if(map.has(str)){
             map.set(str, map.get(str) -1);
            if(map.get(str) === 0) map.delete(str);
        }
        if(map.size === set.size) count += 1;
    }
    return count;
};
numSplits("acbadbaada")