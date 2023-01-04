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

function canCompleteCircuit(gas, cost) {        
    let l = gas.length;       
    let prev =-1; // it stores which should be our first gas station 
    let cur =0;
    for(let i=0;i< l ;i++){           
        cur+=(gas[i]-cost[i]);
        if(cur < 0){
            // the moment we run out of gas we reset our first gas station
            cur=0;  
            prev=-1;
        }
        else if(prev==-1){ // we found new "first" gas station
            prev=i;
        }
    }
    if(cur< 0) return -1;
    
    // now we complete the circle 
    for(let i=0;i< prev ;i++){ 
        cur+=(gas[i]-cost[i]);  
    }
    // if we reach our first gas station with negative fuel means we dint reach actually
    if(cur< 0) return -1;

    // else we reached first gas station
    return prev;
}
canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])