/*
You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:

BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
void visit(string url) visits url from the current page. It clears up all the forward history.
string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

LeetCode: 1472. Design Browser History
*/

var BrowserHistory = function(homepage) {
    this.homepage = homepage;
    this.history = [homepage];
    this.length = 1;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.length = this.length;
    this.history.push(url);
    this.length++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    if(this.length >= steps + 1){
        this.length -= steps;
        return this.history[this.length - 1];
    }
    else{
        this.length = 1;
        return this.homepage;
    }
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.length += steps;
    if(this.length > this.history.length){
        this.length = this.history.length;
    }
    return this.history[this.length - 1]
};

const browser = new BrowserHistory("leetcode.com")
browser.visit("google.com")
browser.visit("facebook.com")
browser.visit("youtube.com")
browser.back(1)
browser.back(1)
browser.forward(1)
browser.visit("linkedin.com")
browser.forward(2)
browser.back(2)
browser.back(7)