//suming up all numbers in an array(including array inside an array)
function sumArray(arr){
    let resArr = [];
    if(arr.length === 0) return resArr;
        if(Array.isArray(arr[0])){
            resArr = resArr.concat(sumArray(arr[0]));
        }else{
            resArr.push(arr[0]);
        }
    resArr = resArr.concat(sumArray(arr.slice(1)));
    let res = resArr.reduce((a,n) => a+n);
    return res;
}
sumArray([1,2,3,[4,5,[6,7],8],9])