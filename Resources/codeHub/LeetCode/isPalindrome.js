//checking if a word spells the same forward as backward
function isPalindrome(str){
    let j = str.length - 1;
    for(var i = 0; i < str.length; i++){
        if(str[i] === str[j]) j--;
        else return false;       
    }
    return true;
}
isPalindrome('nursesrun');