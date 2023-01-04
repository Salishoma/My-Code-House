//checking for nested array and removing the nest so as to remain just a single array
function flatten(arr){
    let newArray = [];
    if(arr.length === 0){
     return newArray;
    }
    if(Array.isArray(arr[0])){ 
         
        newArray = newArray.concat(flatten(arr[0]));
    }else{
        newArray.push(arr[0]);
    }
    newArray = newArray.concat(flatten(arr.slice(1)));
    return newArray;
}
flatten([1, [2, [3, 4], [[7]]]])
// flatten([1, 2, [3, 4], 5])
