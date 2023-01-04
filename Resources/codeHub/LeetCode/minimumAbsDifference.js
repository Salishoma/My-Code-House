/*
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
*/

var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let min = arr[1] - arr[0];
    let res = [[arr[0], arr[1]]];
    let n = arr.length;
    for(let i = 1; i < n - 1; i++){
        let diff = arr[i + 1] - arr[i];
        if(diff === min) res.push([arr[i], arr[i + 1]]);
        else if(diff < min){
            min = diff;
            res = [];
            res.push([arr[i], arr[i + 1]]);
        }
    }
    return res;
};
minimumAbsDifference([40,11,26,27,-20])