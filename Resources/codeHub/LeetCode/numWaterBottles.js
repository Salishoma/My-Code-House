var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles;
    while(numBottles >= numExchange){
        const rem = numBottles % numExchange;
        numBottles = Math.floor(numBottles / numExchange);
        sum += numBottles;
        numBottles += rem;
    }
    return sum;
};
numWaterBottles(13,4)