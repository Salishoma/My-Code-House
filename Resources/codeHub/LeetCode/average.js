/*
Given an array of unique integers salary where salary[i] is the salary of the employee i.

Return the average salary of employees excluding the minimum and maximum salary.

LeetCode: 1491. Average Salary Excluding the Minimum and Maximum Salary
*/

var average = function(salary) {
    let maxSalary = 1000;
    let minSalary = 1000000;
    let sum = 0;
    for(let wages of salary){
        if(wages < minSalary) minSalary = wages;
        if(wages > maxSalary) maxSalary = wages;
        sum += wages;
    }
    return (sum - (minSalary + maxSalary)) / (salary.length - 2);
};
average([4000,3000,1000,2000])