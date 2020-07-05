/*
Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level.

Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the shortest string representing the absolute path.

LeetCode: 71. Simplify Path
*/

var simplifyPath = function(path) {
    const file = path.split("\/")
    let count = 0;
    let str = ""
    for(let i = file.length - 1; i >= 0; i--){
        if(file[i] === "." || file[i] === "") continue;
        if(file[i] === ".."){
            count++;
            continue;
        }
        if(count){
            count--;
            continue
        }
        str = `/${file[i]}${str}`
    }
    return str ? str: "/";
};
simplifyPath("/a//b////c/d//././/..")