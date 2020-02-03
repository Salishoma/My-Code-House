//checking if there are duplicates
function areThereDuplicates(...arr) {
    let obj = {};
    for(let x of arr){
        obj[x]? obj[x] += 1 : obj[x] = 1;
    }
    for(let y of arr){
       if(obj[y] > 1) return true;             
    }
    return false;
}      
areThereDuplicates(1, 2, 2);