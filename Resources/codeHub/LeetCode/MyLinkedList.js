/*
Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
addAtTail(val) : Append a node of value val to the last element of the linked list.
addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.
 
 LeetCode: 707. Design Linked List
*/

var Node = function(val) {
    this.val = val;
    this.next = null;
};

// /**
//  * Initialize your data structure here.
//  */
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.length) return -1;
    return this.getNode(index).val;
};

MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index >= this.length) return -1;
    let counter = 0;
    let curr = this.head
    while(counter !== index){
        curr = curr.next;
        counter++;
    }
    return curr;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val){
    let newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = this.head;
    }else{
        newNode.next = this.head;
        this.head = newNode 
    }
    ++this.length;
    return this;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
         let newNode = new Node(val);
         this.tail.next = newNode;
         this.tail = newNode;
         ++this.length;
         return this;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index > this.length) return;
    let node = new Node(val)
    if(index === 0){
        node.next = this.head;
        this.head = node 
    }else if(index === this.length){
        this.tail.next = node;
        this.tail = node;
    }else{
        let prev = this.getNode(index - 1);
        let next = prev.next;
        prev.next = node
        node.next = next;
    }
    ++this.length;
    return this
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.length) return -1;
    if(index === 0){
        let remove = this.head;
        this.head = this.head.next;
    }else if(index === this.length - 1){
        this.tail = this.getNode(index - 1);
        this.tail.next = null;
    }
    else{
        let prev = this.getNode(index - 1);
        let rem = prev.next;
        prev.next = rem.next;
    }
    this.length--
    return this
};

const obj = new MyLinkedList()
obj.addAtHead(7)
obj.addAtTail(7)
obj.addAtHead(9)
obj.addAtTail(8)
obj.addAtHead(6)
obj.addAtHead(0)
obj.get(5)
obj.addAtHead(0)
obj.get(2)
obj.get(5)
obj.addAtTail(4)

