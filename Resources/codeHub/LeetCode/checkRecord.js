/*
You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

LeetCode: 551. Student Attendance Record I
*/

var checkRecord = function(s) {
    let count = 0;
    if(s[0] === "A") count++;
    for(let i = 1; i < s.length; i++){
        if(s[i - 1] === "L" && s[i] === "L" && s[i + 1] === "L") return false;
        if(s[i] === "A"){
            count++;
            if(count >= 2) return false
        }
    }
    return true;
};
checkRecord("PPALLP")