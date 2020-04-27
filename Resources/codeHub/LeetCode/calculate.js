/*
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

LeetCode: 227. Basic Calculator II
*/

var calculate = function(s) {
    s = s.replace(/\s/g, '');
    let sArr = [];
    const arr = [];
    let j = 0;
    let st = ""
    for(let str of s){
        if(isNaN(str)){
            sArr.push(st);
            sArr.push(str);
            st = ""
        }else{
            st += str;
        }
    }
    sArr.push(st)
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] ==="*"){
            arr[j - 1] = arr[j - 1] * sArr[i + 1];
            i++;
        }else if(sArr[i] === "/"){
            arr[j - 1] = Math.floor(arr[j - 1] / sArr[i + 1]);
            i++;
        }else{
            arr.push(sArr[i]);
            j++;
        }
    }
    let res = parseInt(arr[0])
    for(let i = 1; i < arr.length; i++){
        if(arr[i] === "+"){
            res += parseInt(arr[i + 1]);
            i++;
        }else if(arr[i] === "-"){
            res -= parseInt(arr[i + 1]);
            i++;
        }
    }
    return res;
};
calculate("19+5/2 + 6")