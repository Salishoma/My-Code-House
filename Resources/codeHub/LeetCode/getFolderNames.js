/*
Given an array of strings names of size n. You will create n folders in your file system such that, at the ith minute, you will create a folder with the name names[i].

Since two files cannot have the same name, if you enter a folder name which is previously used, the system will have a suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique.

Return an array of strings of length n where ans[i] is the actual name the system will assign to the ith folder when you create it.

LeetCode: 1487. Making File Names Unique
*/

var getFolderNames = function(names) {
    const map = new Map();
    const res = [];
    for(let name of names){
        if(!map.has(name)){
            res.push(name);
            map.set(name, 1);
        }else{
            let i = map.get(name);
            while(map.has(`${name}(${i})`)) i++;
            map.set(name, i + 1);
            map.set(`${name}(${i})`, 1);
            res.push(`${name}(${i})`);
        } 
    }
    return res;
};
getFolderNames(["gta","gta(1)","gta","avalon"])