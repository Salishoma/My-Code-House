var isAlienSorted = function(words, order) {
    let set = [];
    for(let i = 0; i < order.length; i++){
        let index = order[i].charCodeAt(0) - "a".charCodeAt(0);
        set[index] = i;
    }
    for(let i = 0; i < words.length - 1; i++){
        for(let j = 0; j < words[i].length; j++){
            let index1 = words[i].charCodeAt(j) - "a".charCodeAt(0);
            let index2 = words[i + 1].charCodeAt(j) - "a".charCodeAt(0);
            if(set[index1] > set[index2]) return false;
            else if(set[index1] < set[index2]) break;
            if(words[i].length > words[i + 1].length) return false;
        }
    }
    return true;
};
// isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz")
isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz")