/*
Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

LeetCode: 524. Longest Word in Dictionary through Deleting
*/

var findLongestWord = function(s, d) {
    let arr = [];
    d.sort((a, b) => b.length - a.length)
    let max = 0;
    for(let i = 0; i < d.length; i++){
        let k = 0;
        if(d[i].length < max && arr.length > 0) break
        for(let j = 0; j < s.length; j++){
            if(s[j] === d[i][k]) k++;
            if(k === d[i].length){
                if(k >= max){
                    arr.push(d[i]);
                    max = k;
                }
                break;
            }          
        }
    }
    arr.sort();
    return arr.length > 0 ? arr[0] : ""
};

// findLongestWord("abpcplea",["ale","apple","monkey","plea"])
// findLongestWord("abpcplea",["a","b","c"])
// findLongestWord("bab",["ba","ab","a","b"])
findLongestWord("aewfafwafjlwajflwajflwafj",["apple","ewaf","awefawfwaf","awef","awefe","ewafeffewafewf"])