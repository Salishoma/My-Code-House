/*
Some people will make friend requests. The list of their ages is given and ages[i] is the age of the ith person. 

Person A will NOT friend request person B (B != A) if any of the following conditions are true:

age[B] <= 0.5 * age[A] + 7
age[B] > age[A]
age[B] > 100 && age[A] < 100
Otherwise, A will friend request B.

Note that if A requests B, B does not necessarily request A.  Also, people will not friend request themselves.

How many total friend requests are made?

LeetCode: 825. Friends Of Appropriate Ages
*/

var numFriendRequests = function(ages) {
    if(ages.length <= 1) return 0;
    let friendships = 0;
    let nums = {};
    ages.forEach(function(age){
        if(age >= 15) nums[age] = age in nums ? nums[age] + 1: 1;
    });
    ages = Object.keys(nums).sort((a,b) => b - a);
    for(let i = 0; i < ages.length; i++){
        for(let j = i + 1; j < ages.length; j++){
            if(ages[j] > 0.5 * ages[i] + 7){
                friendships += nums[ages[i]] * nums[ages[j]];
            }
        }
        friendships += ((nums[ages[i]] - 1) * nums[ages[i]]);
    }
    return friendships;
};
// numFriendRequests([16,18,17,16,17,15])
numFriendRequests([16,16])