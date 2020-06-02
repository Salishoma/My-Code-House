var splitIntoFibonacci = function(S) {
    let arr = [];
    let str = "";
    let check = false;
    let end = false;
    for(let i = 0; i < S.length - 2; i++){
        str = `${str}${S[i]}`;
        let st = str
        let str2 = S[i + 1];
        let str21 = str2;
        let count = 0;
        arr.push(parseInt(st), parseInt(str21));
        let k = i + 1;
        for(let j = i + 2; j < S.length; j++){
            if(S.slice(j).startsWith(`${parseInt(st)+parseInt(str21)}`)){
                arr.push(parseInt(st)+parseInt(str21));
                let s = st
                st = str21;
                str21 = `${parseInt(s)+parseInt(str21)}`;
                j += str21.length - 1;
                if(j >= S.length - 1) check = true;
            }else if(parseInt(st)+parseInt(str21) > parseInt(S.slice(j))){
                arr = [];
                break;
            }else{
                str21 = `${S.slice(i + 1, j + 1)}`;
                st = str;
                arr = [parseInt(st),parseInt(str21)];
            }
        }
        if(check) return arr.join('') === S && arr[arr.length - 1] <= Math.pow(2,31) - 1? arr : []
    }
    return arr.join('') === S && arr[arr.length - 1] <= Math.pow(2,31) - 1? arr : []
};
splitIntoFibonacci("11235813")