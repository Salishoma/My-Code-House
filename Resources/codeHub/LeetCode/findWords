/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

LeetCode: 500. Keyboard Row
*/

var findWords = function(words) {
    let arr = [];
    let set1 = new Set(["q","w","e","r","t","y","u","i","o","p","Q","W","E","R","T","Y","U","I","O","P"]);
    let set2 = new Set(["a","s","d","f","g","h","j","k","l","A","S","D","F","G","H","J","K","L"]);
    let set3 = new Set(["z","x","c","v","b","n","m","Z","X","C","V","B","N","M"]);
    for(let i = 0; i < words.length; i++){
        let p = words[i];
        let count = 1;
        if(set1.has(p[0])){
            for(let j = 1; j < p.length; j++){
                if(set1.has(p[j])) count++;
                else break;
                if(count = p.length) arr.push(p);
            }
        }else if(set2.has(p[0])){
            for(let j = 1; j < p.length; j++){
                if(set2.has(p[j])) count++;
                else break;
                if(count = p.length) arr.push(p);
            }
        }else if(set3.has(p[0])){
            for(let j = 1; j < p.length; j++){
                if(set3.has(p[j])) count++;
                else break;
                if(count = p.length) arr.push(p);
            }
        }
    }
    return arr;
};
findWords(["Hello", "Alaska", "Dad", "Peace"])