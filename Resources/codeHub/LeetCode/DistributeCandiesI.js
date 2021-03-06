/*
Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.

LeetCode: 575. Distribute Candies
*/

var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};
distributeCandies([1,1,2,2,3,3])