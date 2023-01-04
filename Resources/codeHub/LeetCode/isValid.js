let _isValid = function (matrix, y, x) {
    return -1 < y && x < matrix[0].length;
};

var searchMatrix = function(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    let x = 0,
        y =  matrix.length - 1;
    while(_isValid(matrix, y, x)) {
        if(matrix[y][x] === target) {
            return true;
        }
        if(matrix[y][x] < target) {
            x += 1;
        } else {
            y -= 1;
        }
    }
    return false;
};
searchMatrix([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 31)