/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

LeetCode: 791. Custom Sort String
*/

var customSortString = function(S, T) {
    const available = {};
    let ret = '';    
    for (let c of T) {
        if (typeof available[c] === 'undefined') {
            available[c] = 0
        }
        
        available[c]++;
    }    
    //handle available
    for (let c of S) {
        if (available[c]) {
            ret += c.repeat(available[c]);
            delete available[c];
        }
    }
    //handle rest
    for (let r of Object.keys(available)) {
        ret += r.repeat(available[r]);
    }  
    return ret;
};
customSortString("kqep","pekeq")