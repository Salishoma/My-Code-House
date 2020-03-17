var smallestRepunitDivByK = function(K) {
    if(K === 1) return 1;
    if(K % 2 === 0) return -1;
    let num = 1 % K;
    for(let i = 1; i <= K; i++){
        num = (10 * num + 1) % K;
        if(num === 0) return i + 1;
    }
    return -1;
};
smallestRepunitDivByK(7)