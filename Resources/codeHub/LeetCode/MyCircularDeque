/*
Design your implementation of the circular double-ended queue (deque).

Your implementation should support following operations:

MyCircularDeque(k): Constructor, set the size of the deque to be k.
insertFront(): Adds an item at the front of Deque. Return true if the operation is successful.
insertLast(): Adds an item at the rear of Deque. Return true if the operation is successful.
deleteFront(): Deletes an item from the front of Deque. Return true if the operation is successful.
deleteLast(): Deletes an item from the rear of Deque. Return true if the operation is successful.
getFront(): Gets the front item from the Deque. If the deque is empty, return -1.
getRear(): Gets the last item from Deque. If the deque is empty, return -1.
isEmpty(): Checks whether Deque is empty or not. 
isFull(): Checks whether Deque is full or not.

LeetCode: 641. Design Circular Deque
*/



/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
     this.queue = [];
     this.k = k;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(!this.isFull()){
        this.queue.unshift(value);
        return true;
    }
    return false;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if(!this.isFull()){
        this.queue.push(value);
        return true;
    }
    return false;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(!this.isEmpty()){
        this.queue.shift();
        return true;
    }
    return false;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if(!this.isEmpty()){
        this.queue.pop()
        return true;
    }
    return false;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(this.queue.length === 0) return -1;
    return this.queue[0];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if(this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.queue.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    let fill = this.queue.length;
    return fill === this.k;
};
const circularDeque = new MyCircularDeque(3) 
circularDeque.insertLast(1);			
circularDeque.insertLast(2);			
circularDeque.insertFront(3);			
circularDeque.insertFront(4);			
circularDeque.getRear();  			
circularDeque.isFull();				
circularDeque.deleteLast();			
circularDeque.insertFront(4);			
circularDeque.getFront();	