//counting a number only once

function countUniqueValues(arr){
  let j=1;
  return arr.reduce((count, val, i, arr) => {
    if (val != arr[j]) count++;
    j++;
    return count;
  }, 0)
}
countUniqueValues([1,1,1,2,3,3,])