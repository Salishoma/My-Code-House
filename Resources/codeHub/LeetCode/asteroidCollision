/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

LeetCode: 735. Asteroid Collision
*/

var asteroidCollision = function(asteroids) {
    for(let i = 0; i < asteroids.length; i++){
        if( asteroids[i] > 0 && asteroids[i + 1] > 0) continue;
        else if(asteroids[i] > 0 && asteroids[i + 1] < 0){
            if(Math.abs(asteroids[i]) > Math.abs(asteroids[i + 1])) {
                asteroids.splice(i + 1, 1);
                i--;
            }else if(Math.abs(asteroids[i]) < Math.abs(asteroids[i + 1])){
                asteroids.splice(i, 1);
                i -= 2;
            }else{
                asteroids.splice(i, 2);
                i -= 2;
            }
        }
    }
    return asteroids;
};
asteroidCollision([5, 10, -5])