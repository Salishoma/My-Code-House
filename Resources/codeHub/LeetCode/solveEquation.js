/*
Solve a given equation and return the value of x in the form of string "x=#value". The equation contains only '+', '-' operation, the variable x and its coefficient.

If there is no solution for the equation, return "No solution".

If there are infinite solutions for the equation, return "Infinite solutions".

If there is exactly one solution for the equation, we ensure that the value of x is an integer.

LeetCode: 640. Solve the Equation
*/

var solveEquation = function(equation) {
    const [left, right] = equation.split('=');
    const [lsv,lsc] = solve(left);
    const [rsv,rsc] = solve(right);
    const [variable,constant] = [lsv-rsv,rsc-lsc];
    if(!variable){
        if(lsc === rsc) return "Infinite solutions";
        else return "No solution";
    }
    return `x=${constant / variable}`
};

const solve = equation => {
    let x = 0;
    let num = 0;
    for(let i = 0; i < equation.length; i++){
        if(equation[i] === "x"){
            if(equation[i - 1] === "+") x += 1;
            else if(equation[i - 1] === "-") x -= 1;
            else x = 1;
        }else if(!isNaN(equation[i])){
            let str = equation[i];
            let k = i + 1;
            while(!isNaN(equation[k])){
                str += equation[k];
                k++;
            }
            let res = equation[k] === "x" ? x : num;
            if(equation[i - 1] === "-") res -= parseInt(str)
            else if(equation[i - 1] === "+") res += parseInt(str);
            else res = parseInt(str)
            if(equation[k] === "x") x = res;
            else num = res;
            i = k;
        }
    }
    return [x,num];
}
solveEquation("55-3-124x-122x+96x-36+7x-72=6+x-2")