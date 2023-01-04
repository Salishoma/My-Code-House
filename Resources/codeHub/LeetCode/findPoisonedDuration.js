/*

*/

/*
In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.

You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.

LeetCode: 495. Teemo Attacking
*/

var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length === 0) return 0;
    let count = duration;
    for(let i = 1; i < timeSeries.length; i++){
        if(timeSeries[i] - timeSeries[i - 1] <= duration){
            count += timeSeries[i] - timeSeries[i - 1];
        }else count += duration
    }
    return count
};
findPoisonedDuration([1,4], 2)