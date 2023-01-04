/*
At a lemonade stand, each lemonade costs $5. 

Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Return true if and only if you can provide every customer with correct change.

LeetCode: 860. Lemonade Change
*/

var lemonadeChange = function(bills) {
    let count = [0,0];
    for(let i = 0; i < bills.length; i++){
        if(bills[i] === 5) count[0]++;
        else if(bills[i] === 10){
            if(count[0] <= 0) return false;
            count[0]--
            count[1]++;
        }else if(bills[i] === 20){
            if(count[0] <= 0) return false;
            else if(count[1] <= 0){
                if(count[0] < 3) return false;
                count[0] -= 3;
            }else{
                count[0]--;
                count[1]--
            }
        }
    }
    return true;    
};
lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5])