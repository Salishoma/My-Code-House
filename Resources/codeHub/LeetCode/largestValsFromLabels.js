/*
We have a set of items: the i-th item has value values[i] and label labels[i].

Then, we choose a subset S of these items, such that:

|S| <= num_wanted
For every label L, the number of items in S with label L is <= use_limit.
Return the largest possible sum of the subset S.

LeetCode: 1090. Largest Values From Labels
*/

var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    const store = [];
    const set = {};
    let sum = 0;
    for(let i = 0; i <labels.length; i++){
        store[i] = [values[i],labels[i]];
    };
    store.sort((a, b) => b[0] - a[0]);
    for(let num of store){
        if(num_wanted === 0) return sum;
        set[num[1]] = (set[num[1]] || 0) + 1;
        if(set[num[1]] > use_limit) continue;
        sum += num[0];
        num_wanted -= 1;
    }
    return sum;
};
largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2)