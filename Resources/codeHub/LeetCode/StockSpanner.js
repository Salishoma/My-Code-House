/*
Write a class StockSpanner which collects daily price quotes for some stock, and returns the span of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were [100, 80, 60, 70, 60, 75, 85], then the stock spans would be [1, 1, 1, 2, 1, 4, 6].

LeetCode: 901. Online Stock Span
*/

var StockSpanner = function() {
    this.stack = [];
    this.prices = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let p = 1;
    while(this.stack.length && this.stack[this.stack.length - 1] <= price){
        this.stack.pop();
        p += this.prices.pop();
    }
    this.stack.push(price);
    this.prices.push(p)
    return p;
};
var stockSpanner = new StockSpanner()
stockSpanner.next(100)
stockSpanner.next(80)
stockSpanner.next(60)
stockSpanner.next(70)
stockSpanner.next(60)
stockSpanner.next(75)
stockSpanner.next(85)