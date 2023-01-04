/*
Given the array orders, which represents the orders that customers have done in a restaurant. More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi is the table customer sit at, and foodItemi is the item customer orders.

Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

LeetCode: 1418. Display Table of Food Orders in a Restaurant 
*/

var displayTable = function(orders) {
    const serve = {};
    const set = new Set();
    for(let order of orders){
        let [name, table, food] = order;
        if(!serve[table]) serve[table] = {};
        serve[table][food] = (serve[table][food] || 0) + 1;
        set.add(food);
    }
    const tables = Object.keys(serve);
    const food = Array.from(set).sort();
    const res = [["Table",...food]];
    for(let i = 0; i < tables.length; i++){
        let table = tables[i];
        res[i + 1] = [table];
        for(let meal of food){
            if(!serve[table][meal]) res[i + 1].push("0");
            else res[i + 1].push(`${serve[table][meal]}`)
        }
    }
    return res;
};
displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]])