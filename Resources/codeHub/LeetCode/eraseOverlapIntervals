/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

LeetCode: 435. Non-overlapping Intervals
*/

var eraseOverlapIntervals = function(intervals) {
    if(intervals.length === 0) return 0
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let count = 1
    let end = intervals[0][1];
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] >= end){
            end = intervals[i][1];
            count++;
        }
    }
    return intervals.length - count;
};
eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])