/*
Given a list of lists of integers, nums, return all elements of nums in diagonal order as shown in the below images.
 
 LeetCode: 1424. Diagonal Traverse II
*/

var findDiagonalOrder = function(nums) {
    const res = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            res.push([i, j, i + j])
        }
    }
    res.sort((a, b) => {
        if(a[2] === b[2]) return b[0] - a[0];
        return a[2] - b[2];
    })
    const arr = [];
    for(let i = 0; i < res.length; i++){
        let j = res[i]
        let num = nums[j[0]][j[1]]
        arr.push(num);
    }
    return arr
};
findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])