/*
X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

LeetCode: 788. Rotated Digits
*/

var rotatedDigits = (N) => {
    let count = 0;
    for (let i = 1; i <= N; i++) {
        let n = i;
        let noRotate = true;
        while(n > 1){
            let rem = n % 10;
            if (rem === 3 || rem === 4 || rem === 7){
                noRotate = true;
                break;
            }
            if(noRotate){
                if (rem===2 || rem===5 || rem===6 || rem===9) noRotate = false;
            }
            n = Math.floor(n / 10)
        }
        if(!noRotate) count++;
    }
    return count;
}
rotatedDigits(10)