/*
The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

LeetCode: 881. Boats to Save People
*/

var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let count = 0;
    let i = 0, j = people.length - 1
    while(i <= j){
        count++;
        if(people[i] + people[j] <= limit){
            i++;
        }
        j--
    }
    return count;
};
numRescueBoats([1,2], 3)