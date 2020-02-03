/*
On a table are N cards, with a positive integer printed on the front and back of each card (possibly different).

We flip any number of cards, and after we choose one card. 

If the number X on the back of the chosen card is not on the front of any card, then this number X is good.

What is the smallest number that is good?  If no number is good, output 0.

Here, fronts[i] and backs[i] represent the number on the front and back of card i. 

A flip swaps the front and back numbers, so the value on the front is now on the back and vice versa.

LeetCode: 822. Card Flipping Game
*/

function flipgame(fronts, backs) {
    let same = new Set();
    for (let i = 0; i < fronts.length; ++i){
        if (fronts[i] === backs[i]) same.add(fronts[i]);
    }                    
    let ans = 2001;
    for (let x of fronts){
        if (!same.has(x)) ans = Math.min(ans, x);
    }        
    for (let x of backs){
        if (!same.has(x)) ans = Math.min(ans, x);
    }
    return ans % 2001;
}
flipgame([1,2,4,4,7], [1,3,4,1,3])