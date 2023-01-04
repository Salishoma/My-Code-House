/*
Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

postTweet(userId, tweetId): Compose a new tweet.
getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
follow(followerId, followeeId): Follower follows a followee.
unfollow(followerId, followeeId): Follower unfollows a followee.

LeetCode: 355. Design Twitter
*/

var Twitter = function() {
     this.tweet = {};
     this.time = 0;
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.create = function(user){
    this.tweet[user] = {};
    this.tweet[user][0] = [];
    this.tweet[user][1] = [];
}

Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweet[userId]){
        this.create(userId)
    }else{
        let followers = this.tweet[userId][1];
        for(let follower of followers){
            this.tweet[follower][0].push([userId,tweetId,this.time]);
        }
    }
    this.tweet[userId][0].push([userId,tweetId, this.time++]);
    return tweetId
};


/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(!this.tweet[userId]) return [];
    const arr = this.tweet[userId][0].slice(-10).map(x => x = x[1]);
    arr.reverse();
    return arr;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(followerId === followeeId) return;
    if(!this.tweet[followeeId]){
        this.create(followeeId);
    }
    if(!this.tweet[followerId]){
        this.create(followerId);
        this.tweet[followerId][0] = this.tweet[followeeId][0].filter(x => x[0] === followeeId);
    }else if(this.tweet[followeeId][0].length){
        if(this.tweet[followeeId][1].includes(followerId)){
            return;
        }
        const follow = this.tweet[followeeId][0].filter(x => x[0] === followeeId)
        this.tweet[followerId][0] = [...this.tweet[followerId][0], ...follow];
    }
    this.tweet[followerId][0].sort((a,b)=>a[2]-b[2]);
    this.tweet[followeeId][1].push(followerId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(followerId === followeeId) return;
    if(this.tweet[followerId] && this.tweet[followeeId]){
        this.tweet[followerId][0] = this.tweet[followerId][0].filter(x => x[0] !== followeeId);
        this.tweet[followeeId][1] = this.tweet[followeeId][1].filter(x => x !== followerId);
    }
};

const twitter = new Twitter()
twitter.postTweet(1,4)
twitter.postTweet(2,5)
twitter.postTweet(1,4)
twitter.unfollow(1,2)
twitter.follow(1,2)
twitter.getNewsFeed(1)
