/*
Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

In case of a tie, return the minimum such integer.

Notice that the answer is not neccesarilly a number from arr.

LeetCode: 1300. Sum of Mutated Array Closest to Target
*/

var findBestValue = function(arr, target) {
    arr.sort((a, b) => b - a);
    let sum = arr.reduce((a, b) => a + b, 0);
    if(sum <= target) return Math.max(...arr);
    let sum1 = arr[0];
    let near = Infinity;
    let sum2 = 0;
    let index;
    let max = -Infinity, min = Infinity;
    for(let i = 1; i < arr.length; i++){
        index = i;
        sum1 += arr[i];
        sum2 = arr[i] * (i + 1) + sum - sum1;
        if(sum2 >= target){
            max = arr[i];
            near = sum2
        }else{
            min = arr[i];
            break;
        }
    }
    if(min === Infinity){
        let round = Math.floor(target / arr.length);
        return Math.abs(round * arr.length - target) < Math.abs((round + 1) * arr.length - target) ? round : (round + 1)
    }
    let next = sum - sum1 + arr[index];
    let diff = Math.min(Math.abs(near - target), Math.abs(sum2 - target));
    for(let i = max - 1; i > min; i--){
        sum = i * index + next;
        if(sum > target){
            max = i;
        }else{
            min = i;
        }
        
    }
    return Math.abs(max * index + next - target) < Math.abs(min * index + next - target) ? max : min
};
findBestValue([12,43,15,18,26,84,98],178)