/*
There is a sale in a supermarket, there will be a discount every n customer.
There are some products in the supermarket where the id of the i-th product is products[i] and the price per unit of this product is prices[i].
The system will count the number of customers and when the n-th customer arrive he/she will have a discount on the bill. (i.e if the cost is x the new cost is x - (discount * x) / 100). Then the system will start counting customers again.
The customer orders a certain amount of each product where product[i] is the id of the i-th product the customer ordered and amount[i] is the number of units the customer ordered of that product.

Implement the Cashier class:

Cashier(int n, int discount, int[] products, int[] prices) Initializes the object with n, the discount, the products and their prices.
double getBill(int[] product, int[] amount) returns the value of the bill and apply the discount if needed. Answers within 10^-5 of the actual value will be accepted as correct.

LeetCode: Apply Discount Every n Orders
*/

var Cashier = function(n, discount, products, prices) {
    this.n = n; 
    this.discount = discount / 100;
    this.num = 0;
    this.map = new Map();
    for(let i = 0; i < products.length; i++){
        this.map.set(products[i], prices[i])
    }
};

Cashier.prototype.getBill = function(product, amount) {
    this.num++;
    let sum = 0;
    for(let i = 0; i < product.length; i++){
        sum += this.map.get(product[i]) * amount[i];
    }
    if(this.n === this.num){
        this.num = 0;
        return sum - this.discount * sum;
    }
    return sum;
};

const cashier = new Cashier(3,50,[1,2,3,4,5,6,7],[100,200,300,400,300,200,100])
cashier.getBill([1,2],[1,2])
cashier.getBill([3,7],[10,10])
cashier.getBill([1,2,3,4,5,6,7],[1,1,1,1,1,1,1])
cashier.getBill([4],[10])
cashier.getBill([7,3],[10,10])
cashier.getBill([7,5,3,1,6,4,2],[10,10,10,9,9,9,7])
cashier.getBill([2,3,5],[5,3,2])