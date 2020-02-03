/*
In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

LeetCode: 648. Replace Words
*/
var replaceWords = function(dict, sentence) {
    let set = new Set(dict);
    let arr = sentence.split(" ");
    for(let c of arr){
        for(let i = 1; i < c.length; i++){
            let prefix = c.substring(0, i);
            if(set.has(prefix)){
                sentence = sentence.replace(c, prefix);
                break;
            }
        }
    }
    return sentence;
};
replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")