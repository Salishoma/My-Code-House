/*
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?

LeetCode: 135. Candy
*/

function candy(ratings) {
    let sum = 0;
    let left2right = Array(ratings.length).fill(1);
    let right2left = Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left2right[i] = left2right[i - 1] + 1;
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right2left[i] = right2left[i + 1] + 1;
        }
    }
    for (let i = 0; i < ratings.length; i++) {
        sum += Math.max(left2right[i], right2left[i]);
    }
    return sum;
}
// candy([1,0,2])
// candy([1,2,2])
// candy([1,2,87,87,87,2,1])
// candy([1,3,2,2,1])
candy([1,3,4,5,2])