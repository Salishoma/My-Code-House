/*
In a forest, each rabbit has some color. Some subset of rabbits (possibly all of them) tell you how many other rabbits have the same color as them. Those answers are placed in an array.

Return the minimum number of rabbits that could be in the forest.

LeetCode: 781. Rabbits in Forest
*/

var numRabbits = function(answers) {
    let seen = {};
    let res = 0;
    for(let c of answers){
        if(c === 0){
            res += 1;
            continue
        }else if(!seen[c]){
            seen[c] = c + 1;
            res += c + 1;
        }else if(seen[c]){
            seen[c] -= 1;
            if(seen[c] === 1) delete seen[c];
        }
    }
    return res;
};
numRabbits([0,0,1,1,1])