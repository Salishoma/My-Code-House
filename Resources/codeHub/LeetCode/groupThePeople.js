/*
There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.

You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution. 

LeetCode: 1282. Group the People Given the Group Size They Belong To
*/

var groupThePeople = function(groupSizes) {
    const arr = [];
    const group = {};
    for(let i = 0; i < groupSizes.length; i++){
        if(!group[groupSizes[i]]){
            group[groupSizes[i]] = [[], 0]
        }
        group[groupSizes[i]][0].push(i);
        group[groupSizes[i]][1] += 1;
        if(group[groupSizes[i]][1] === groupSizes[i]){
            arr.push(group[groupSizes[i]][0]);
            delete group[groupSizes[i]];
        }
    }
    return arr;
};
groupThePeople([3,3,3,3,3,1,3])