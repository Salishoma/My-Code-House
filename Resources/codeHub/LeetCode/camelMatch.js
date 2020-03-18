var camelMatch = function(queries, pattern) {
    let res = [];
    for(let q of queries){
        let j = 0;
        for(let i = 0; i < q.length; i++){
            if(q[i] === pattern[j]) j++;
            else{
                if(q[i] !== q[i].toLowerCase()){
                    res.push(false);
                    break;
                } 
            }
            if(q.length >= pattern.length && i === q.length - 1 && j === pattern.length) res.push(true);
            else if(i === q.length - 1 && j !== pattern.length) res.push(false);
        }
    }
    return res;
};
// camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB")
camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBaT")