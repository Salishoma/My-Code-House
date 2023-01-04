/*
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

LeetCode: 1154. Day of the Year
*/

var dayOfYear = function(date) {
    const days = [31,28,31,30,31,30,31,31,30,31,30,31];
    const [year, month, day] = date.split('-');
    if(year % 100 === 0){
        if(year % 400 === 0) days[1] = 1 + + days[1];
    }else if(year % 4 === 0) days[1] = 1 + + days[1];
    let sum = 0;
    for(let i = 0; i < parseInt(month) - 1; i++){
        sum += +days[i];
    }
    sum += parseInt(day);
    return sum;
};
dayOfYear( "2019-01-09")