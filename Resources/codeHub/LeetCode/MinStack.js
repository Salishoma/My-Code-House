/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 
LeetCode: 155. Min Stack
*/

var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    let prev = this.getMin();
    let min = prev !== null ? Math.min(x, prev) : x;
    this.stack.push({ val: x, min });
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1].val : null;
};

MinStack.prototype.getMin = function() {
    return this.stack.length ? this.stack[this.stack.length - 1].min : null;
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();
minStack.pop();
minStack.top();      
minStack.getMin();   