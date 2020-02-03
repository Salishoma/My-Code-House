/*
Given an array of characters, compress it in-place.

The length after compression must always be smaller than or equal to the original array.

Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.

LeetCode: 443. String Compression
*/

var compress = function(chars) {
    let count = 0;
    let str = chars[0]; let rem = 0; let count1 = 0; 
    for(let i = 0; i <= chars.length; i++){
        if(str === chars[i]){
            count++;            
        }else if(str !== chars[i]){
            if(count > 1){
                if(count >= 10){
                    rem = count % 10;
                    count1 = Math.floor(count / 10);
                    chars.splice(i - count, count, chars[i - 1], "" + count1, "" + rem);
                }else chars.splice(i - count, count, chars[i - 1], "" + count); 
                count >= 10 ? str = chars[i - count + 3] :  str = chars[i - count + 2];
                count >= 10 ? i = i - count + 2 :  i = i - count + 1;
                count = 0;               
            }else{
                str = chars[i];
                count = 1;
            }
        }
    }
    return chars;
}
compress(["a","a","b","b","c","c","c"])
compress(["a","a","a","b","b","a","a"])
compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])