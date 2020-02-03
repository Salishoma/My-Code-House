//checking if there are duplicates
function areThereDuplicates(...arr) {
    return new Set(arr).size !== arr.length;
}       
areThereDuplicates(1,6,5,12,8,6,7);
