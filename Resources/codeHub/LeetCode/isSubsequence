// checking if first argument is arranged in the same way when checked in second argument
function isSubsequence(str1, str2){
    if(str1.length > str2.length) return false;
    let str = "";
    let i = 0;
    for(let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
            str = str.concat(str2[j]);
            i++;
        }
    }
    for(let k = 0; k < str1.length; k++){
        if(str[k] !== str1[k]) return false;
    }
    return true;
}
isSubsequence("abc", "abracadabra")