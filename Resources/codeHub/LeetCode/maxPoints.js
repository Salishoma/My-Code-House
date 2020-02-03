var maxPoints = function(points) {
    if(points.length === 0) return 0
    let seen = {};
    let seen1 = {};
    let grad;
    let count = 0;
    let max = 0;
    for(let i = 0; i < points.length - 1; i++){
        for(let j = i + 1; j < points.length; j++){
            let x = points[j][0] - points[i][0];
            let y = points[j][1] - points[i][1];
            let join = "" + x + y;
            if(x === 0 && y === 0) max += 1;
            if(x !== 0 && !seen1[join]){
                grad = y / x;
            }else grad = Infinity;
            seen1[join] = 1;
            seen[grad] = (seen[grad] || 0) + 1;
            if(seen[grad] > max) max = seen[grad];
        }
        seen = {};
    }
    return max + 1
};
maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]])
// maxPoints([[3,10],[0,2],[0,2],[3,10]])