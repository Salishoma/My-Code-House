/*
Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.

LeetCode: 678. Valid Parenthesis String
*/

var checkValidString = function(s) {
    let res = [];
    let arrRes = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(") arrRes.push(i);
        else if(s[i] === ")"){
            if(arrRes.length) arrRes.pop();
            else if(res.length) res.pop();
            else return false
        }else res.push(i)     
    }
    let m = arrRes.length - 1, n = res.length - 1;
    while(res.length && arrRes.length){
        if(res[n] > arrRes[m]){
            res.pop();
            arrRes.pop();
            m--;
            n--
        }else if(res[n] < arrRes[m]) return false   
    }
    return arrRes.length === 0;
};
checkValidString("(*(()))((())())*(**(()))((*)()(()))*(())()(())(()")