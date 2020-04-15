/*
Given a list of intervals, remove all intervals that are covered by another interval in the list. Interval [a,b) is covered by interval [c,d) if and only if c <= a and b <= d.

After doing so, return the number of remaining intervals.

LeetCode: 1288. Remove Covered Intervals
*/

var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => {
        if(a[0] !== b[0]) return a[0] - b[0];
        else return a[1] - b[1];
    });
    let count = 0;
    let num = intervals[0]
    for(let i = 1; i < intervals.length; i++){
        if(num[0] === intervals[i][0]){
            count++;
            num = num[1] > intervals[i][1] ? num : intervals[i]
        }else if(num[1] >= intervals[i][1]){
            count++;
        }else num = intervals[i];
    }
    return intervals.length - count;
};
removeCoveredIntervals([[1,4],[5,7],[3,6],[2,8],[2,5],[3,9],[4,8],[1,7],[5,6]])