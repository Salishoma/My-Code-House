//fibonacci sequence

function fib(n){
    if(n <= 2) return 1;
    var fibNums = [undefined, 1, 1]
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }    
    return fibNums[n];
}
fib(30)
