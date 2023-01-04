/*
Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

Return that integer.

LeetCode: 1287. Element Appearing More Than 25% In Sorted Array
*/

var findSpecialInteger = function(arr) {
    let n = arr.length, max = 0, num = arr[0];
    let count = [];
    for(let i = 1; i < n; i++){
        count[arr[i]] === undefined? count[arr[i]] =  0 : count[arr[i]] = count[arr[i]] + 1;
        if(count[arr[i]] > max){
            max = count[arr[i]];
            num = arr[i];
        }
    }
    return num;
};
findSpecialInteger([1,2,2,6,6,6,6,7,10])
