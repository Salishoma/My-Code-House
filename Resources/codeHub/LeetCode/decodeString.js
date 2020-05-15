/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

LeetCode: 394. Decode String
*/

var decodeString = function(s) {
    const arr = [];
    let j = 0;
    for(let i = s.length - 1; i >= 0 ; i--){
        if(s[i] === "]"){
            j++
        }else if(s[i] === "["){
            let num = "";
            i--
            while(!isNaN(parseInt(s[i]))){
                num = s[i] + num;
                i--;
            }
            i++;
            arr[j] = arr[j].repeat(num);
            if(arr[j - 1] === undefined) arr[j - 1] = "";
            arr[j - 1] = arr[j] + arr[j - 1];
            arr[j] = ""
            j--;
        }else if(isNaN(s[i])){
            if(arr[j] === undefined) arr[j] = "";
            arr[j] = s[i] + arr[j];
        }
    }
    const res = arr.filter((s) => s !== undefined).join('');
    return res;
};
decodeString("3[a]2[b4[F]c]")
