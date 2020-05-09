/*
In an infinite binary tree where every node has two children, the nodes are labelled in row order.

In the odd numbered rows (ie., the first, third, fifth,...), the labelling is left to right, while in the even numbered rows (second, fourth, sixth,...), the labelling is right to left.

Given the label of a node in a tree, return the labels in the path from the root of the tree to the node with that label.

LeetCode: 1104. Path In Zigzag Labelled Binary Tree
*/

var pathInZigZagTree = function(label) {
    let index = Math.floor(Math.log2(label));
    const arr = []
    while(label >= 1){
        arr.push(label);
        let num = Math.pow(2, index + 1) - label;
        let pos = Math.ceil(num / 2);
        index--;
        label = Math.pow(2, index) + pos - 1;
    }
    return arr.reverse()
};
pathInZigZagTree(26)