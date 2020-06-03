/*
Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.

LeetCode: 870. Advantage Shuffle
*/

var advantageCount = function(A, B) {
    const A1 = [...A];
    A1.sort((a, b) => a - b);
    const map = new Map();
    for(let i = 0; i < B.length; i++){
        map.set(i, B[i])
    }
    const key = Array.from(map.keys()).sort((a, b) => map.get(a) - map.get(b));
    const n = A.length;
    let j = 0;
    const arr = [];
    for(let i = 0; i < n ; i++){
        let k = key.length - 1;
        if(A1[i] <= map.get(key[0]) && A1[i] <= map.get(key[k])){
            arr[key[k]] = A1[i];
            map.delete(key[k])
            key.pop();
        }else if(A1[i] > map.get(key[j])){
            arr[key[j]] = A1[i];
            map.delete(key[j])
            key.shift();
        }else{
            while(A1[i] <= map.get(key[j]) && j < k){
                j++;
            }
            if(j === k) j = k - 1;
            arr[key[j]] = A1[i];
            map.delete(key[j])
            key.splice(j)
        }
    }
    return arr;
};
advantageCount([5621,1743,5532,3549,9581],[913,9787,4121,5039,1481])
