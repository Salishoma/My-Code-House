var titleToNumber = function(s) {
    if(!s) return 0;
    let code = "A".charCodeAt(0) - 1;
    let n = s.length - 1;
    let res = 0;
    for(let char of s){
        res += 26 ** n * (char.charCodeAt(0) - code);
        n--
    }
    return res;
};
titleToNumber("BAABA")