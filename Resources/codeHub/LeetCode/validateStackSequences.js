/*
Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

LeetCode: 946. Validate Stack Sequences
*/

function validateStackSequences(pushed, popped) {
    let N = pushed.length;
    let stack = [];
    let j = 0;
    for (let x of pushed) {
        stack.push(x);
        while (stack && j < N && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }

    return j === N;
}
validateStackSequences([1,2,3,4,5], [4,5,3,2,1])