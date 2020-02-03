/*
A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

LeetCode: 1184. Distance Between Bus Stops
*/

var distanceBetweenBusStops = function(distance, start, destination) {
    let d = 0, d1 = 0;
    let n = distance.length;
    let l = start;
    for(let i = start; l !== destination; i++){
        l = i % n;
        if(l !== destination) d += distance[l]
    }
    l = destination;
    for(let i = destination; l !== start; i++){
        l = i % n;
        if(l !== start) d1 += distance[l];
    }
    return Math.min(d,d1)
}
distanceBetweenBusStops([1,2,3,4],0,3)