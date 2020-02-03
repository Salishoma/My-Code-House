var uniquePaths = function(m, n) {
    const mapper = Array.from({ length: n }, () => 1)
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            mapper[j] = mapper[j - 1] + mapper[j]
        }
    }
    return mapper[n - 1]
};
uniquePaths(3,2);