/*
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

LeetCode: 461. Hamming Distance
*/

function hammingDistance(x, y) {       
        let mod1 = 0,mod2 = 0,count = 0;      
        while(x != 0 | y != 0){
            mod1 = x%2;
            mod2 = y%2;         
            if(mod1 !== mod2){
                count++;
            }           
            x= Math.floor(x/2);
            y=Math.floor(y/2);
        }       
        return count;      
}
hammingDistance(1, 4)