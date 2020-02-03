/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

LeetCode: 6. ZigZag Conversion
*/

var convert = function(s, numRows) {
    let arr = [...s];
    let newArr = [];
    if(numRows === 1) return s;
    let i = 0;
    let zig;
    let zag;
    let down = true;
    for(let k = 0; k < s.length; k++){
        zig = 2*(numRows - 1 - i);
        zag = 2 * (i)
        if(down){
            let j = k + zig;
            if(i >= 0 && i < numRows - 1){
                arr[j] === undefined? arr[i] = arr[i] : arr[i] += arr[j];
                i++;
                down = true;
            }else if(i === numRows - 1){
                j = k + zag;
                arr[j] === undefined? arr[i]  : arr[i] += arr[j];
                i++;
                down = true;
                
            }
            if(i === numRows){
                k++;
                i--;
                down = false;
            }
        }
        if(!down){
            i--;
            zag = 2 * (i);
            l = k + zag;
            if(i >= 1){
                arr[l] === undefined? arr[i]  : arr[i] += arr[l];
                down = false;
            }
            if(i === 0){
                k--;
                i = 0;
                down = true;
            }
        }
    }
    arr = arr.slice(0, numRows).join("");         
    return arr;
};
convert("PAYPALISHIRING", 3)