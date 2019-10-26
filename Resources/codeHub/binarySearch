// finding index of an argument in a sorted array

function binarySearch(arr, val){
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end)/2);
  while(start <= end){
      if(middle === end && arr[middle] !== val) return -1;
      if(arr[middle] > val){ 
          end = middle - 1;
      }else{
          start = middle + 1; 
      }
      middle = Math.floor((start + end)/2);
  }
  return middle;
}

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3);
binarySearch([1, 2, 3, 4, 5],6)
