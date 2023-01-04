function uniquePaths(m, n) {
    var cache = new Array(m);
    for(var i = 0; i < m; i++) cache[i] = 1;
    for(var i = 1; i < n; i++){
        for(var j = 1; j < m; j++){
            cache[j] = cache[j - 1] + cache[j];
        }
    }
    return cache[m - 1];
//     return cache
}
uniquePaths(7,3)