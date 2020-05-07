/*
Given a list of folders, remove all sub-folders in those folders and return in any order the folders after removing.

If a folder[i] is located within another folder[j], it is called a sub-folder of it.

The format of a path is one or more concatenated strings of the form: / followed by one or more lowercase English letters. For example, /leetcode and /leetcode/problems are valid paths while an empty string and / are not.

LeetCode: 1233. Remove Sub-Folders from the Filesystem
*/

var removeSubfolders = function(folder) {
    folder.sort((a, b) => a.localeCompare(b));
    const path = [folder[0]];
    let parent = folder[0];
    for(let i = 1; i < folder.length; i++){
        if(!folder[i].startsWith(`${parent}/`)){
            path.push(folder[i]);
            parent = folder[i]
        }
    }
    return path;
};
// removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])
removeSubfolders(["/ah/al/am","/ah/al"]);