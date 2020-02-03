/*
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

LeetCode: 1029. Two City Scheduling
*/

const twoCitySchedCost = (costs) => {
    const n = costs.length / 2;
    let sum = 0;
    costs.sort((a, b) => {
       return a[0] - b[0] - (a[1] - b[1]); 
    });
    
    for (let i = 0; i < n; ++i) {
        sum += costs[i][0] + costs[i + n][1];
    }
    
    return sum;
};
twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])