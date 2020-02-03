//Searching if a number exists
function search(arr, num){
  if((arr.length === 1 && arr[0] === num) || (arr[0] === num)) return 0;
  let i = 0; 
  let j = arr.length;
  while(i < j - 1){
    let index = Math.floor((i + j)/2);
    if(arr[index] < num) i = index;
    else if(arr[index] > num) j = index;
    else return index;
  }
  return -1;
}
search([1,2,3,5,6],7)
// search([1,2,3,4,5,6,7,8], 9)