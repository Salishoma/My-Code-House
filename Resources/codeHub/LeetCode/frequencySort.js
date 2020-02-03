/*
Given a string, sort it in decreasing order based on the frequency of characters.

LeetCode: 451. Sort Characters By Frequency
*/

var frequencySort = function(s) {
    let map = {}
    for (let letter of s) {
        map[letter] = (map[letter] || 0) + 1
    }
    let result = ""
    let sorted = Object.keys(map).sort((a, b) => map[b] - map[a])
    for (let letter of sorted) {
        for (let count = 0; count < map[letter]; count++) {
            result += letter
        }
    }
    
    return result
};
frequencySort("tree")