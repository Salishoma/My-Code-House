//printing a string backward
function reverse(str){
    let Str = "";
    for(let i = str.length - 1; i >= 0 ; i--) Str = Str.concat(str[i]);   
    return Str;
}
reverse('awesome');