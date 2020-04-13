/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

LeetCode: 1291. Sequential Digits
*/

var sequentialDigits = function(low, high) {
    let step = low.toString().split('');
    let below = true;
    const check = (start) =>{
        let one = parseInt(step[0]);
        for(let i = start; i < step.length; i++){
            step[i] = 1 + one;
            if(step[i] > 9){
                below = false;
                break;
            }
            one++;
        }
    } 
    if(step[1] - step[0] > '1' || step[1] === step[0]){
        check(0)
    }else{
        check(1)
    }
    const arr = [1,11,111,1111,11111,111111,1111111,11111111,111111111];
    const res = [];
    let round = Math.floor(Math.log10(low));
    let take = Math.floor(123456789 /(Math.pow(10,8)/Math.pow(10,round)));
    res[0] =  !below ? take : parseInt(step.join(''));
    if(res[0] < low){
        round = round + 1;
        take = Math.floor(123456789 /(Math.pow(10,8)/Math.pow(10,round)))
    }
    res[0] = res[0] >= low ? res[0] : res[0] * 10 + (res[0] % 10 + 1);
    let rem = res[0] % 10;
    let last = res[0];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        j = i;
        if(arr[i] > Math.pow(10,round)) break;
    }
    let i = 1;
    while(res[i - 1] <= high){
        if(rem === 9){
            res[i] = take * 10 + (take % 10 + 1);
            take = res[i];
            j++;
        }else{
            res[i] = res[i - 1] + arr[j];
        }
        rem = res[i] % 10;
        i++;
    }
    res.pop();
    return res;
};
sequentialDigits(1000, 13000)