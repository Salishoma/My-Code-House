/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

LeetCode: 274. H-Index
*/

var hIndex = function(citations) {
    if(citations.length === 0) return 0;
    if(citations.length === 1 && citations[0] === 0) return 0;
    
    citations.sort((a, b) => a - b);
    for(let i = 0; i < citations.length; i++){
        let j = citations.length - i;
        if(j <= citations[i]) return j;
    }
};
hIndex([1,2])
// hIndex([3,0,6,1,5])
hIndex([0])