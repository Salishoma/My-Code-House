/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

A valid IP address consists of exactly four integers (each integer is between 0 and 255) separated by single points.

LeetCode: 93. Restore IP Addresses
*/

var restoreIpAddresses = function(s) {
    if(s.length < 4) return [];
    const arr = [];
    let str1 = "", str2 = "", str3 = "", str4 = "" ;
    for(let i = 0; i < 3 && s[i]; i++){
        if(s.length - i > 12) continue;
        str1 = `${str1}${s[i]}`;
        if(i >= 2 && parseInt(str1) > 255) break;
        let st1 = `${str1}.`;
        str2 = "", str3 = "", str4 = "" ;
        for(let j = i + 1; j < i + 4 && s[j]; j++){
            if(s.length - j > 12) continue;
            str2 = `${str2}${s[j]}`;
            if(j >= i + 3 && parseInt(str2) > 255) break;
            let st2 = `${str2}.`;
            str3 = "", str4 = "";
            for(let k = j + 1; k < j + 4 && s[k]; k++){
                if(s.length - k > 12) continue;
                str3 = `${str3}${s[k]}`;
                if(k >= j + 3 && parseInt(str3) > 255) break;
                let st3 = `${str3}.`;
                str4 = "";
                for(let l = k + 1; l < k + 4 && s[l]; l++){
                    if(s.length - l > 12) continue;
                    str4 = `${str4}${s[l]}`;
                    if(l >= k + 3 && parseInt(str4) > 255) break;
                }
                let count = st1.length + st2.length +st3.length +str4.length -3 - s.length
                if(parseInt(st1) <= 255 && parseInt(st2) <= 255 && parseInt(st3) <= 255 && parseInt(str4) <= 255 && !count){
                    if((str1.startsWith("0") && str1.length > 1) || (str2.startsWith("0") && str2.length > 1) || (str3.startsWith("0") && str3.length > 1) || (str4.startsWith("0") && str4.length > 1)) continue;
                    arr.push(`${st1}${st2}${st3}${str4}`)
                }
            }
        }
    }
    return arr;
};
restoreIpAddresses("25525511135")