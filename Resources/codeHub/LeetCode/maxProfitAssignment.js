/*
We have jobs: difficulty[i] is the difficulty of the ith job, and profit[i] is the profit of the ith job. 

Now we have some workers. worker[i] is the ability of the ith worker, which means that this worker can only complete a job with difficulty at most worker[i]. 

Every worker can be assigned at most one job, but one job can be completed multiple times.

For example, if 3 people attempt the same job that pays $1, then the total profit will be $3.  If a worker cannot complete any job, his profit is $0.

What is the most profit we can make?

LeetCode: 826. Most Profit Assigning Work
*/

var maxProfitAssignment = function(difficulty, profit, worker) {
    const gain = new Map();
    for(let i = 0; i < difficulty.length; i++){
        if(!gain.has(difficulty[i]) || profit[i] > gain.get(difficulty[i])){
            gain.set(difficulty[i], profit[i]);
        }
    }
    difficulty.sort((a, b) => gain.get(b) - gain.get(a))
    let total = 0;
    for(let i = 0; i < worker.length; i++){
        let max = 0;
        for(let j = 0; j < difficulty.length; j++){
            if(difficulty[j] <= worker[i]){
                total += gain.get(difficulty[j]);
                break;
            }     
        }
    }
    return total;
};

maxProfitAssignment(
 [66,1,28,73,53,35,45,60,100,44,59,94,27,88,7,18,83,18,72,63]
,[66,20,84,81,56,40,37,82,53,45,43,96,67,27,12,54,98,19,47,77]
,[61,33,68,38,63,45,1,10,53,23,66,70,14,51,94,18,28,78,100,16]
)