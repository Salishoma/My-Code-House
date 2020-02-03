/*
In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty. 

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

Return that maximum distance to closest person.

LeetCode: 849. Maximize Distance to Closest Person
*/
var maxDistToClosest = function(seats) {
    let count = 0, max = 0;
    for(let i = 0; i < seats.length; i++){
        if(seats[i] === 0) count++;
        else{
            max = Math.max(max, Math.ceil(count / 2));
            count = 0;
        }
    }
    if(max < count) max = count;
    count = 0;
    for(let i = seats.length - 1; i >= 0; i--){
        if(seats[i] === 0) count++;
        else{
            max = Math.max(max, Math.ceil(count / 2));
            count = 0;
        }
    }
    return max > count ? max : count
};
maxDistToClosest([1,0,0,0,1,0,1])