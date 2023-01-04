var brokenCalc = function(X, Y) {
    if(X >= Y) return X - Y;
    let count  = 0;
    while(Y > X){
        if(Y % 2 === 1) Y++;
        else Y /= 2;
        count++;
    }
    return count + X - Y;
};
brokenCalc(5, 8)