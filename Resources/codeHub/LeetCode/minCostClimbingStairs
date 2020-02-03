/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

LeetCode: 746. Min Cost Climbing Stairs
*/

function minCostClimbingStairs(cost) {
    let f1 = 0, f2 = 0;
    for (let i = cost.length - 1; i >= 0; --i) {
        let f0 = cost[i] + Math.min(f1, f2);
        f2 = f1;
        f1 = f0;
    }
    return Math.min(f1, f2);
}
minCostClimbingStairs([10, 15, 20])