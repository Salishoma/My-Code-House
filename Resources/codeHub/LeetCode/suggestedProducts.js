/*
Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

LeetCode: 1268. Search Suggestions System
*/

var suggestedProducts = function(products, searchWord) {
    products.sort();
    let str = "";
    let i = 0;
    let arr = Array.from({length: searchWord.length}, () => [])
    for(let s of searchWord){
        str += s;
        for(let j = 0; j < products.length; j++){
            if(products[j].startsWith(str)) arr[i].push(products[j]);
            if(arr[i].length === 3) break;
        }
        i++;
    }
    return arr;
};
suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")