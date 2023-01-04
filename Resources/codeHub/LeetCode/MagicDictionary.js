var MagicDictionary = function() {
    this.dict = []
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    this.dict = dict;
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    for(let dict of this.dict){
        let count = 0;
        if(word === dict) continue;
        if(word.length === dict.length){
            for(let j = 0; j < dict.length; j++){
                if(word[j] !== dict[j]) count++;
                if(count > 1) break;
            }
            if(count === 1) return true;
        }
    }
    return false;
};
const magic = new MagicDictionary()
magic.buildDict([["hello","hallo","leetcode","judge"]])
magic.search("hello")
magic.search("hallo")
magic.search("hell")
magic.search("LeetCode")
magic.search("juage")