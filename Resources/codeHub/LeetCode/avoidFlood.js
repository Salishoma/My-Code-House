/*
Your country has an infinite number of lakes. Initially, all the lakes are empty, but when it rains over the nth lake, the nth lake becomes full of water. If it rains over a lake which is full of water, there will be a flood. Your goal is to avoid the flood in any lake.

Given an integer array rains where:

rains[i] > 0 means there will be rains over the rains[i] lake.
rains[i] == 0 means there are no rains this day and you can choose one lake this day and dry it.
Return an array ans where:

ans.length == rains.length
ans[i] == -1 if rains[i] > 0.
ans[i] is the lake you choose to dry in the ith day if rains[i] == 0.
If there are multiple valid answers return any of them. If it is impossible to avoid flood return an empty array.

Notice that if you chose to dry a full lake, it becomes empty, but if you chose to dry an empty lake, nothing changes. 

LeetCode: 1488. Avoid Flood in The City
*/

var avoidFlood = function(rains) {
    const seen = {};
    let zeroes = [];
    let res = [];
    let j = 0;
    for(let i = 0; i < rains.length; i++){
        if(!rains[i]) zeroes.push(i);
        else{
            if(!seen[rains[i]]){
                seen[rains[i]] = [1, i];
                res[i] = -1;
            }else if(zeroes.length){
                let k;
                for(let j = 0; j < zeroes.length; j++){
                    if(zeroes[j] > seen[rains[i]][1]){
                        res[zeroes[j]] = rains[i];
                        seen[rains[i]] = [1, i];
                        k = j
                        break;
                    }
                }
                if(k !== undefined){
                    zeroes.splice(k,1)
                }else return [];
            }else if(seen[[rains[i]]]) return [];
        }
    }
    j = 0;
    for(let i = 0; i < rains.length; i++){
        if(zeroes[j] >= i && !res[i]){
            res[zeroes[j]] = 1;
            if(!res[i]) res[i] = -1;
            j++;
        }else if(!res[i]) res[i] = -1;
    }
    return res;
};
avoidFlood([1,2,0,0,2,1])