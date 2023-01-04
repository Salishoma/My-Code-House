/*
Write a class RecentCounter to count recent requests.

It has only one method: ping(int t), where t represents some time in milliseconds.

Return the number of pings that have been made from 3000 milliseconds ago until now.

Any ping with time in [t - 3000, t] will count, including the current ping.

It is guaranteed that every call to ping uses a strictly larger value of t than before.

LeetCode: 933. Number of Recent Calls
*/

var RecentCounter = function() {
    this.call =[];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.call.push(t);
    while(t - 3000 > this.call[0]) this.call.shift()
    return this.call.length;
};
const recentCounter = new RecentCounter()
recentCounter.ping(1)
recentCounter.ping(100)
recentCounter.ping(3001)
recentCounter.ping(3002)