/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

LeetCode: 118. Pascal's Triangle
*/

var generate = function(numRows) {
    let i = 0, j = 0, sum = 0;
    let arr = [], arr1 = [];
    while(j < numRows){
        if(arr.length === 0){
            arr.push([1]);
            j++;
        }else if(arr.length === 1){
            arr.push([1,1]);
            j++;
        }
        else{
            if(i === 0){
                arr1.push(1);
                i++;
            }
            sum = arr[j - 1][i - 1] + arr[j - 1][i];
            arr1.push(sum);
            i++;
            if(i >= arr.length){
                arr1.push(1);
                arr.push(arr1);
                arr1 = [];
                i = 0; j++;
                sum = 0;
            }
        }        
    }
    return arr;    
};
generate(7)