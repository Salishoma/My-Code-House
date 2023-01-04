/*
Given the string croakOfFrogs, which represents a combination of the string "croak" from different frogs, that is, multiple frogs can croak at the same time, so multiple “croak” are mixed. Return the minimum number of different frogs to finish all the croak in the given string.

A valid "croak" means a frog is printing 5 letters ‘c’, ’r’, ’o’, ’a’, ’k’ sequentially. The frogs have to print all five letters to finish a croak. If the given string is not a combination of valid "croak" return -1.

LeetCode: 1419. Minimum Number of Frogs Croaking
*/

var minNumberOfFrogs = function(croakOfFrogs) {
    if(croakOfFrogs.length % 5 !== 0) return -1;
    let frog = 0;
    let seen = {};
    let max = 0;
    for(let s of croakOfFrogs){
        if(s === "c"){
            seen[s] = (seen[s] || 0) + 1;
        }else if(s === "r"){
            if(!seen["c"]) return -1;
            seen["c"] -= 1;
            if(seen["c"] === 0) delete seen["c"];
            seen["cr"] = (seen["cr"] || 0) + 1;
        }
        else if(s === "o"){
            if(!seen["cr"]) return -1;
            seen["cr"] -= 1;
            if(seen["cr"] === 0) delete seen["cr"];
            seen["cro"] = (seen["cro"] || 0) + 1;
        }
        else if(s === "a"){
            if(!seen["cro"]) return -1;
            seen["cro"] -= 1;
            if(seen["cro"] === 0) delete seen["cro"];
            seen["croa"] = (seen["croa"] || 0) + 1;
        }
        else if(s === "k"){
            if(!seen["croa"]) return -1;
            seen["croa"] -= 1;
            if(seen["croa"] === 0) delete seen["croa"];
            seen["croak"] = (seen["croak"] || 0) + 1;
        }else return -1;
    }
    for(let i = 0; i < croakOfFrogs.length; i++){
        if(croakOfFrogs[i] === "c"){
            frog++;
        }else if(croakOfFrogs[i] === "k"){
            frog--;
        }
        max = Math.max(frog, max);
    }
    return max;
};
minNumberOfFrogs("cccrorakrcoakorakoak")
