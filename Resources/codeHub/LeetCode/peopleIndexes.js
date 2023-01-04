/*
Given the array favoriteCompanies where favoriteCompanies[i] is the list of favorites companies for the ith person (indexed from 0).

Return the indices of people whose list of favorite companies is not a subset of any other list of favorites companies. You must return the indices in increasing order.

LeetCode: 1452. People Whose List of Favorite Companies Is Not a Subset of Another List
*/

var peopleIndexes = function(favoriteCompanies) {
    const arr = [];
    for(let i = 0; i < favoriteCompanies.length; i++){
        let isSubset = false;
        for(let j = 0; j < favoriteCompanies.length; j++){
            if(i === j) continue;
            if(favoriteCompanies[i].length > favoriteCompanies[j].length){
                continue;
            }
            const newSet = new Set(favoriteCompanies[i].concat(favoriteCompanies[j]))
            if(favoriteCompanies[j].length === newSet.size){
                isSubset = true;
                break;
            }
        }
        if(!isSubset) arr.push(i)
    }
    return arr;
};
peopleIndexes([["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]])