var getPermutation = function(n, k) {
    var res = [];
    var arr = [];
    
    for (var i = 1; i <= n; i++) arr.push(i);
    
    var n2 = n;
    for (var i = 0; i < n2; i++) {
        var nf = getFactorial(n - 1)
        var x = Math.ceil(k/nf) - 1; 
        res.push(arr.splice(x,1)[0]); 
        k -= x * nf; 
        n = n-1; 
    }
    
    return res.join('');
};

function getFactorial(n) {
    if (n == 1) return n;
    else if (n > 1) {
        return n * getFactorial(n - 1);
    }
}
getPermutation(3,9)