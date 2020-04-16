/*
Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.

LeetCode: 1344. Angle Between Hands of a Clock
*/

var angleClock = function(hour, minutes) {
    const time = 1/12 * minutes + Math.abs(hour % 12) * 5;
    const deg = Math.abs(time - minutes) * 6;
    return  Math.min(deg, 360 - deg);
};
angleClock(12, 30)