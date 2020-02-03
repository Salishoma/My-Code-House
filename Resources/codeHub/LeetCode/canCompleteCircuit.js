/*
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

Note:

If there exists a solution, it is guaranteed to be unique.
Both input arrays are non-empty and have the same length.
Each element in the input arrays is a non-negative integer.

LeetCode: 134. Gas Station
*/

var canCompleteCircuit = function(gas, cost) {
    let tank = 0;
    let index;
    let arr = [];
    let arr1 = [];
    for(let i = 0; i < gas.length; i++){
        arr[i] = gas[i] - cost[i];
    }
    for(let i = 0; i < gas.length; i++){
        if(arr[i] < 0) continue;
        else arr1.push(i);
    }
    index = arr1[0];
    let j = 0;
    i = index
    while( arr1[j] !== undefined){
        if(tank + arr[i] >= 0){
            tank += arr[i];
            i++;
            if(i >= arr.length && i !== arr1[j]){
                i = 0; 
                if(i === arr1[j]) return arr1[j];
            }else if(i === arr1[j]){
                return arr1[j];
            }
        }else{
            j++;
            i = arr1[j];
            tank = 0;
        }
    }
    return -1;
};
canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])
// canCompleteCircuit([3,3,4],[3,4,4])
canCompleteCircuit([3,1,1], [1,2,2])
canCompleteCircuit([5,8,2,8],[6,5,6,6])