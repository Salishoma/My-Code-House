/*
X is a good number if after rotating each digit individually by 180 degrees, we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.

A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any other number and become invalid.

Now given a positive number N, how many numbers X from 1 to N are good?

LeetCode: 788. Rotated Digits
*/

var rotatedDigits = (N, ans=0) => {
    const ok = ((num, rotated=false) => {
    for (; num > 0; num = Math.floor(num / 10)) {
        var last = num % 10;
        if (last == 3 || last == 4 || last == 7)
            return false;
        if (last == 2 || last == 5 || last == 6 || last == 9)
            rotated = true;
        }
        return rotated;
    });
    for (let n=1; n <= N; ans += ok(n++));
    return ans;
};
rotatedDigits(28)