//checking if there are duplicates
function areThereDuplicates(...arr) {
    let x = arr.sort()
    let j = 0;
    for(i = j + 1; i < arr.length; i++){
        if(arr[i] === arr[j]) return true;
        j++
    }
       return x
}      
areThereDuplicates(1,2,5,12,5,6,7);
