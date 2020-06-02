/*
Given a string S of digits, such as S = "123456579", we can split it into a Fibonacci-like sequence [123, 456, 579].

Formally, a Fibonacci-like sequence is a list F of non-negative integers such that:

0 <= F[i] <= 2^31 - 1, (that is, each integer fits a 32-bit signed integer type);
F.length >= 3;
and F[i] + F[i+1] = F[i+2] for all 0 <= i < F.length - 2.
Also, note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.

Return any Fibonacci-like sequence split from S, or return [] if it cannot be done.

LeetCode: 842. Split Array into Fibonacci Sequence
*/

var splitIntoFibonacci = function(S) {
    let arr = [];
    let str = "";
    let check = false;
    for(let i = 0; i < S.length - 2; i++){
        str = `${str}${S[i]}`;
        let st = str
        let str2 = S[i + 1];
        arr.push(parseInt(st), parseInt(str2));
        for(let j = i + 2; j < S.length; j++){
            if(S.slice(j).startsWith(`${parseInt(st)+parseInt(str2)}`)){
                if(parseInt(st)+parseInt(str2) > Math.pow(2,31) - 1){
                    return [];
                }
                arr.push(parseInt(st)+parseInt(str2));
                let s = st
                st = str2;
                str2 = `${parseInt(s)+parseInt(str2)}`;
                j += str2.length - 1;
                if(j >= S.length - 1) check = true;
            }else if(parseInt(st)+parseInt(str2) > parseInt(S.slice(j))){
                arr = [];
                break;
            }else{
                str2 = `${S.slice(i + 1, j + 1)}`;
                st = str;
                arr = [parseInt(st),parseInt(str2)];
            }
        }
        if(check) return arr.join('') === S ? arr : []
    }
    return arr.join('') === S? arr : []
};
splitIntoFibonacci("11235813")