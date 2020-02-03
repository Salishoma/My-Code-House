/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

LeetCode: 791. Custom Sort String
*/

var customSortString = function(S, T) {
    let arr = [];
    let map = new Map();
    // let rem = []
    for(let i = 0; i <T.length; i++){
        map.set(T[i], (map.get(T[i]) || 0) + 1);
    }
    for(let i = 0; i <S.length; i++){
        if(map.has(S[i])){
            var count = map.get(S[i]);
            while(count > 0){
                arr.push(S[i]);
                count--;
            }
            map.set(S[i], 0);
        }
    }
    for(let i = 0; i <T.length; i++){
        if(map.get(T[i]) !== 0) arr.push(T[i]);
    }
    return arr.join('');
};
customSortString("cba","abcd")