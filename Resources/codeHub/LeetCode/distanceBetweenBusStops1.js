/*
A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

LeetCode: 1184. Distance Between Bus Stops
*/

const distanceBetweenBusStops = (distance, start, destination) => {
  let pathA = 0;
  let pathB = 0;

  if (start < destination) {
    distance.map((d, i) => {
      if (i < start || i >= destination) {
        pathA += d;
      } else {
        pathB += d;
      }
    });
  } else {
    distance.map((d, i) => {
      if (i < destination || i >= start) {
        pathA += d;
      } else {
        pathB += d;
      }
    });
  }
  return Math.min(pathA, pathB);
};
distanceBetweenBusStops([7,10,1,12,11,14,5,0],7,2)