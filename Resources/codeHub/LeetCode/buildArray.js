var buildArray = function(target, n) {
    let arr = [];
    let j = 1;
    for(let i = 0; i < target.length; i++){
        if(j === target[i]) arr.push("Push");
        else{
            while(j < target[i]){
                arr.push("Push");
                arr.push("Pop");
                j++;
            }
            arr.push("Push");
        }
        j++;
    }
    return arr;
};
buildArray([2,3,4,5,8,9,10],10)