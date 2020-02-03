/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

LeetCode: 187. Repeated DNA Sequences
*/

var findRepeatedDnaSequences = function(s) {
    let arr = [];
    let seen = {};
    // if(s.length === 10) arr.push(s)
    let i = 0;
    let j = 10;
    while(j <= s.length){
        let k = s.substring(i, j);
        seen[k] = ++seen[k] ||  1;
        i++;
        j++;
    }
    for(let k in seen){
        if(seen[k] > 1) arr.push(k);
    }
    return arr;
};
findRepeatedDnaSequences("AAAAAAAAAAA")