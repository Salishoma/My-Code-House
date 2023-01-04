/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.

LeetCode: 1160. Find Words That Can Be Formed by Characters
*/

var countCharacters = function(words, chars) {
    let map = new Map();
    for(let c of chars){
        if(!map.has(c)) map.set(c, 1);
        else map.set(c, map.get(c) + 1);
    }
    let sum = 0;
    for(let w of words){
        let wmap = new Map();
        for(let i = 0; i < w.length; i++){
            if(map.has(w[i])){
                if(!wmap.has(w[i])) wmap.set(w[i], 1);
                else wmap.set(w[i], wmap.get(w[i]) + 1);
                if(wmap.get(w[i]) > map.get(w[i])) break;
                if(i === w.length - 1) sum += w.length;
            }else break;
        }
    }
    return sum;
};
countCharacters(["cat","bt","hat","tree"], "atach")