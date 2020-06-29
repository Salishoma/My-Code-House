var kthFactor = function(n, k) {
    let upperBound = n;
    let lowerBound = 1;
    let count = 0;
    const arr = [];
    const seen = {};
    
    while(lowerBound <= upperBound){
        if(n % lowerBound === 0){
            upperBound = n / lowerBound;
            arr.push(upperBound);
            count++;
            if(count === k) return lowerBound
            seen[lowerBound] = true;
        }
        lowerBound++;
    }
    let j = arr.length - 1;
    if(count < k){
        while(count < k && arr[j]){
            if(!seen[arr[j]]){
                count++;
                if(count === k) return arr[j];
            }
            j--;
        }
        return arr[j] ? arr[j + 1] : -1;   
    }
    return lowerBound;
};
kthFactor(46, 4)
