/*
Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.

LeetCode: 1078. Occurrences After Bigram
*/
var findOcurrences = function(text, first, second) {
    let arr = text.split(' ');
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === second){
            if(arr[i - 1] === first && arr[i + 1] !== undefined) res.push(arr[i + 1])
        }
    }
    return res
};
findOcurrences("alice is a good girl she is a good student","a","good")
