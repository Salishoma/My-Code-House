/*
Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.

So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.

Note:

Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
All the heaters follow your radius standard and the warm radius will the same.

LeetCode: 475. Heaters
*/

var findRadius = function(houses, heaters) {
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);
    let max = 0;
    let prev = heaters[0];
    let j = 1;
    for(let i = 0; i < houses.length; i++){
        let next;
        if(houses[i] === prev) continue;
        while(houses[i] > heaters[j] || Math.abs(houses[i] - prev) >= Math.abs(heaters[j] - houses[i])){
            prev = heaters[j];
            j++;
        }
     
        if(heaters[j] !== undefined){
            next = Math.min(Math.abs(houses[i] - prev),  Math.abs(heaters[j] - houses[i]));
        }else{
            next = Math.abs(houses[i] - prev);
        }
        max = Math.max(max, next);
    }
    return max;
};
findRadius([1,2,3,4],[1,4])