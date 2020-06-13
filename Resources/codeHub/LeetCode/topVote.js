/*
In an election, the i-th vote was cast for persons[i] at time times[i].

Now, we would like to implement the following query function: TopVotedCandidate.q(int t) will return the number of the person that was leading the election at time t.  

Votes cast at time t will count towards our query.  In the case of a tie, the most recent vote (among tied candidates) wins.

LeetCode: 911. Online Election
*/
var TopVotedCandidate = function(persons, times) {
    this.countVotes = {};
    this.record = {};
    this.times = times;
    let max = 0;
    let lead = persons[0];
    for(let i = 0; i < persons.length; i++){
        this.countVotes[persons[i]] = (this.countVotes[persons[i]] || 0) + 1;
        if(max < this.countVotes[persons[i]]){
            max = this.countVotes[persons[i]];
            lead = persons[i];
        }else if(max === this.countVotes[persons[i]]){
            lead = persons[i];
        }
        this.record[times[i]] = lead;
    }
};

/** 
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
    let i = 0, j = this.times.length - 1;
    if(t === this.times[i]) return this.record[this.times[i]];
    if(t === this.times[j]) return this.record[this.times[j]];
    let mid = Math.floor((i + j) / 2);
    while(i < j){
        if(t === this.times[mid]) return this.record[this.times[mid]];
        if(t > this.times[mid]) i = mid + 1;
        else j = mid;
        mid = Math.floor((i + j) / 2);
    }
    return this.times[i] <= t ? this.record[this.times[i]] : this.record[this.times[i - 1]];
};
const topVote = new TopVotedCandidate([0,1,1,0,0,1,0],[0,5,10,15,20,25,30]);
topVote.q(3)
topVote.q(12)
topVote.q(25)
topVote.q(15)
topVote.q(24)
topVote.q(8)
/** 
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */