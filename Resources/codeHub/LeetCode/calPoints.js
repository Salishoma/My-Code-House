/*
You're now a baseball game point recorder.

Given a list of strings, each string can be one of the 4 following types:

Integer (one round's score): Directly represents the number of points you get in this round.
"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.

You need to return the sum of the points you could get in all the rounds.

LeetCode: 682. Baseball Game
*/

var calPoints = function(ops) {
    let arr = [ops[0]];
    let sum = parseInt(ops[0]);
    let j = 1;
    for(let i = 1; i < ops.length; i++){
        if(ops[i] == parseInt(ops[i])){
            arr[j] = ops[i];
            sum += parseInt(arr[j]);
            j++;
        }else if(ops[i] === "C"){
            let n = arr.pop();
            sum -= parseInt(n) 
            j--;
        }else if(ops[i] === "D"){
            arr[j] = 2 * arr[j - 1];
            sum += parseInt(arr[j]);
            j++
        }else if(ops[i] === "+"){
            arr[j] = parseInt(arr[j - 1]) + parseInt(arr[j - 2]);
            sum += arr[j]
            j++
        }
    }
    return sum;
};
calPoints(["5","2","C","D","+"])