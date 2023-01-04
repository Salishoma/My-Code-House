/*
Design a data structure that supports the following two operations:

void addWord(word)
bool search(word)
search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.

LeetCode: 211. Add and Search Word - Data structure design
*/

function WordDictionary() {
    this.map = new Map();
};

WordDictionary.prototype.addWord = function (word) {
    if(!this.map.has(word.length)) this.map.set(word.length, [word]);
    else this.map.get(word.length).push(word);
};

WordDictionary.prototype.search = function (word) {
    let arr = this.map.get(word.length);
    if(arr === undefined) return false;
    for(let i = 0; i < word.length; i++){
        let temp = [];
        let dot = false
        for(let j = 0; j < arr.length; j++){
            if(word[i] === "."){
                temp =[...arr];
                dot = true;
                break;
            }
            if(word[i] === arr[j][i]) temp.push(arr[j])
        }
        if(!temp.length && !dot) return false;
        arr = [...temp];
    }
    return true;
};
const word = new WordDictionary()
word.addWord("bad")
word.addWord("dad")
word.addWord("mad")
word.search("pad") 
word.search("bad") 
word.search(".ad") 
word.search("b..") 