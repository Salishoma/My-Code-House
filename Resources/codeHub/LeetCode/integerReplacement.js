/*
Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

LeetCode: 397. Integer Replacement
*/

var integerReplacement = function(n) {
    let count = 0;
    while(n > 1){
        if( n === 3) return count + 2;
        if(n % 2 === 0) n /= 2;
        else{
            if((n - 1) % 4 === 0) n -= 1;
            else n += 1;
        }
        count++;
    }
    return count;
};
integerReplacement(15)