/*
Write a function that takes a string as input and reverse only the vowels of a string.

LeetCode: 345. Reverse Vowels of a String
*/
var reverseVowels = function(s) {
    let arr = s.split('');
    let i = 0, j = arr.length - 1;
    let set = new Set("aeiouAEIOU");
    while(i < j){
        if(set.has(arr[i]) && set.has(arr[j])){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++; j--
        }else if(!set.has(arr[i]) && set.has(arr[j])){
            i++;
        }else if(set.has(arr[i]) && !set.has(arr[j])){
            j--
        }else{
            i++;
            j--
        }
    }
    return arr.join('')
};
reverseVowels("esmeralda")