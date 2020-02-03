/*
Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

LeetCode: 605. Can Place Flowers
*/

var canPlaceFlowers = function(flowerbed, n) {
    if(n === 0) return true;
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i] === 0){
            if(flowerbed[i - 1] === 1 || flowerbed[i + 1] === 1) continue;
            else{
                flowerbed[i] = 1;
                count++;
                if(count >= n) return true
            }
        }
    }
    return false;
};
canPlaceFlowers([1,0,0,0,0,1],2)