var partitionLabels = function(S) {
    let seen = {};
    let arr = [];
    for(let i = 0; i < S.length; i++){
        seen[S[i]] = i;
    }
    let count = 0;
    let max = 0;
    for(let i = 0; i < S.length; i++){
        if(seen[S[i]] > max) max = seen[S[i]]
        if(i === max){
            arr.push(count + 1);
            count = 0;
            continue;
        }
        count++;
    }
    return arr;
};
partitionLabels("ababcbacadefegdehijhklij")