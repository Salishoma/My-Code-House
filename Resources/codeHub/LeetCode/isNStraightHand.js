/*
Alice has a hand of cards, given as an array of integers.

Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.

Return true if and only if she can.

LeetCode: 846. Hand of Straights
*/

var isNStraightHand = function(hand, W) {
    const map = new Map();
    for(let h of hand){
        if(!map.has(h)) map.set(h, 1);
        else map.set(h, map.get(h) + 1)
    }
    let values = Array.from(map.keys()).sort((a, b) => a - b);
    let diff = values[1] - values[0];
    for(let i = 0; i < values.length; i++){
        if(map.get(values[i]) === 0) continue;
        let range = values[i + W - 1] - values[i] + 1;
        if(range !== W) return false;
        let count = 0;
        let k = i;
        while(map.get(values[k]) > 0){
            if(count === W - 1){
                map.set(values[k],map.get(values[k]) - 1);
                k = i;
                count = 0;
                continue
            }
            if(map.get(values[k]) > map.get(values[k + 1])) return false;
            if(values[k + 1] - values[k] !== diff) return false;
            map.set(values[k],map.get(values[k]) - 1);
            k++;
            count++;
        }
        i = k;
    }
    return true;
};
isNStraightHand([1,2,3,6,2,3,4,7,8], 3)