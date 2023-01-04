/*
Given a collection of intervals, merge all overlapping intervals.

LeetCode: 56. Merge Intervals
*/

var merge = function(intervals) {
    if(intervals.length === 0) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    var arr = [intervals[0]];
    var j = 0;
    for(var i = 1; i < intervals.length; i++){
        if((arr[j][0] >= intervals[i][0] && arr[j][0] <= intervals[i][1]) || (arr[j][0] <= intervals[i][0] && arr[j][1] >= intervals[i][0])){
            arr[j][0] = Math.min(arr[j][0], intervals[i][0]);
            arr[j][1] = Math.max(arr[j][1], intervals[i][1]);
        }else{
            j++;
            arr.push(intervals[i]);
        }     
    }
    return arr;
};
merge([[1,3],[2,6],[8,10],[15,18]])