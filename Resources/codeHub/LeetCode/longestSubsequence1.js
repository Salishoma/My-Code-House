var longestSubsequence = function(arr, difference) {
    let res = 0;
    const map = new Map();
    for(let i=0;i<arr.length;i++){
        let len = (map.get(arr[i]-difference) || 0) +1;
        map.set(arr[i], len);
        res = Math.max(res, len);
    }
    return res;
};
longestSubsequence([1,5,7,8,5,3,4,2,1],-2)