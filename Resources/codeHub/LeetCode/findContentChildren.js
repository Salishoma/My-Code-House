/*
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor gi, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

LeetCode: 455. Assign Cookies
*/

var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let j = s.length - 1;
    let count = 0;
    for(let i = g.length - 1; i >= 0 && j>= 0; i--){
        if(s[j] >= g[i]){
            count++;
            j--
        }        
    }
    return count;
};
findContentChildren([1,2,3], [1,1])