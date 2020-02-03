/*
Given an array of citations sorted in ascending order (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

LeetCode: 275. H-Index II
*/

var hIndex = function(citations) {
    if(citations.length === 0) return 0;
    let i = 0;
    let j = citations.length;    
    let mid;
    let k = citations.length
    while(i < j){
        let mid = i + Math.floor((j - i) / 2);
        if(citations[mid] >= k - mid) j = mid;
        else i = mid + 1;
    }
    return k - j;
};
hIndex([0,1,3,5,6])