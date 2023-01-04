var evalRPN = function(tokens) {
    let sum = 0;
    let arr = [];
    let j = 0;
    for(let i = 0; i < tokens.length; i++){
        if(isNaN(tokens[i])){
            if(tokens[i] === "+"){
                arr[j - 2] = parseInt(arr[j - 2]) + parseInt(arr[j - 1])
            }else if(tokens[i] === "-"){
                arr[j - 2] = arr[j - 2] - arr[j - 1];
            }
            else if(tokens[i] === "*"){
                arr[j - 2] = arr[j - 2] * arr[j - 1];
            }else if(tokens[i] === "/"){
                arr[j - 2] = parseInt(arr[j - 2]) / parseInt(arr[j - 1])
            }
            arr.pop();
            j--
        }else{
            arr.push(tokens[i]);
            j++;
        }
    }
    return Math.floor(arr[0]);
};
evalRPN(["2", "1", "+", "3", "*"])
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])