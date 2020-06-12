/*
Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

For example, given an input list of values [1, 9], when we pick up a number out of it, the chance is that 9 times out of 10 we should pick the number 9 as the answer.

LeetCode: 528. Random Pick with Weight
*/

var Solution = function(w) {
    this.index = [[0,w[0]]];
    this.sum = w[0];
    for(let i = 1; i < w.length; i++){
        this.sum += w[i];
        this.index[i] = [this.index[i-1][1],this.index[i-1][1] + w[i]];
    }
};

/**
 * @return {number}
 */

Solution.prototype.pickIndex = function() {
    let start = 0;
    let end = this.index.length - 1;
    let rand = Math.floor(Math.random() * this.sum);
    if(!end) return start;
    if(this.index[start][0] <= rand && this.index[start][1] > rand){
        return start
    }
    if(this.index[end][0] <= rand && this.index[end][1] > rand){
        return end;
    }
    let mid = Math.floor((start + end) / 2);
    while (start <= end) {
        if(this.index[mid][0] <= rand && this.index[mid][1] > rand){
            return mid;
        }
        if (this.index[mid][1] <= rand) {
            start = mid + 1;
         }else{
            end = mid;
        }
        mid = Math.floor((start + end) / 2);
    }
};
const solution = new Solution([3,14,1,7])
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
solution.pickIndex()
