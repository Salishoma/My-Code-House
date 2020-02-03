/*
We are given a personal information string S, which may represent either an email address or a phone number.

We would like to mask this personal information according to the following rules:


1. Email address:

We define a name to be a string of length ≥ 2 consisting of only lowercase letters a-z or uppercase letters A-Z.

An email address starts with a name, followed by the symbol '@', followed by a name, followed by the dot '.' and followed by a name. 

All email addresses are guaranteed to be valid and in the format of "name1@name2.name3".

To mask an email, all names must be converted to lowercase and all letters between the first and last letter of the first name must be replaced by 5 asterisks '*'.


2. Phone number:

A phone number is a string consisting of only the digits 0-9 or the characters from the set {'+', '-', '(', ')', ' '}. You may assume a phone number contains 10 to 13 digits.

The last 10 digits make up the local number, while the digits before those make up the country code. Note that the country code is optional. We want to expose only the last 4 digits and mask all other digits.

The local number should be formatted and masked as "***-***-1111", where 1 represents the exposed digits.

To mask a phone number with country code like "+111 111 111 1111", we write it in the form "+***-***-***-1111".  The '+' sign and the first '-' sign before the local number should only exist if there is a country code.  For example, a 12 digit phone number mask should start with "+**-".

Note that extraneous characters like "(", ")", " ", as well as extra dashes or plus signs not part of the above formatting scheme should be removed.

 

Return the correct "mask" of the information provided.

LeetCode: 831. Masking Personal Information
*/

var maskPII = function(S) {
    if(S.includes("@")){
        S = S.toLowerCase()
        let index = S.indexOf("@");
        return S[0] + "*****" + S.substring(index - 1);
    }else{
        S = S.replace("(", "").replace(")", "").replace(/-/g, "").replace("+", "").replace(/\s/g, "");
        let N = S.length;
        if(N === 10){
            return "***-***-" + S.substring(N - 4);
        }else{
            if(N === 11) return "+*-***-***-" + S.substring(N - 4);
            else if(N === 12) return "+**-***-***-" + S.substring(N - 4);
            else if(N === 13) return "+***-***-***-" + S.substring(N - 4);
        } 
    }
};
maskPII("86-(10)12345678")