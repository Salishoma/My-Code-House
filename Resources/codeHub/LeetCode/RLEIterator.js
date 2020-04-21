/*
Write an iterator that iterates through a run-length encoded sequence.

The iterator is initialized by RLEIterator(int[] A), where A is a run-length encoding of some sequence.  More specifically, for all even i, A[i] tells us the number of times that the non-negative integer value A[i+1] is repeated in the sequence.

The iterator supports one function: next(int n), which exhausts the next n elements (n >= 1) and returns the last element exhausted in this way.  If there is no element left to exhaust, next returns -1 instead.

For example, we start with A = [3,8,0,9,2,5], which is a run-length encoding of the sequence [8,8,8,5,5].  This is because the sequence can be read as "three eights, zero nines, two fives".

LeetCode: 900. RLE Iterator
*/

var RLEIterator = function(A) {
    this.arr = A;
    this.index = 0;
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function(n) {
    if(this.index >= this.arr.length) return -1;
    this.arr[this.index] -= n
    if(this.arr[this.index] >= 0) return this.arr[this.index + 1];
    while(this.index < this.arr.length){
        let rem = this.arr[this.index]
        this.index += 2;
        if(this.index >= this.arr.length) return -1;
        if(rem < 0) this.arr[this.index] = this.arr[this.index] + rem;
        else this.arr[this.index] = this.arr[this.index] - n
        if(this.arr[this.index] >= 0) return this.arr[this.index + 1];
    }
    return -1;
};
const it = new RLEIterator([3,8,0,9,2,5])
it.next(2)
it.next(1)
it.next(1)
it.next(2)