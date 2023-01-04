/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

LeetCode: 735. Asteroid Collision
*/

var asteroidCollision = function(asteroids) {
    const stack = [];
    
    for (let i = 0; i < asteroids.length; i++) {
        const rightVal = asteroids[i];
        let shouldIncludeRight = true;
        
        while (stack.length && stack[stack.length - 1] > 0 && rightVal < 0) { // left (+) and right (-)
            const leftVal = stack.pop();
            
            if (leftVal > Math.abs(rightVal)) {
                stack.push(leftVal);
                shouldIncludeRight = false;
                break;
            } else if (leftVal === Math.abs(rightVal)) {
                shouldIncludeRight = false;
                break;
            }
        }
        
        if (shouldIncludeRight) {
            stack.push(rightVal);
            shouldIncludeRight = true;
        }
    }
    
    return stack;
};
asteroidCollision([5, 10, -5])