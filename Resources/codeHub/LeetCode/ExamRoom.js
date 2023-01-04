/*
In an exam room, there are N seats in a single row, numbered 0, 1, 2, ..., N-1.

When a student enters the room, they must sit in the seat that maximizes the distance to the closest person.  If there are multiple such seats, they sit in the seat with the lowest number.  (Also, if no one is in the room, then the student sits at seat number 0.)

Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat() returning an int representing what seat the student sat in, and ExamRoom.leave(int p) representing that the student in seat number p now leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have a student sitting in seat p.

LeetCode: 855. Exam Room
*/

var ExamRoom = function(N) {
    this.N = N;
    this.arr = [];
};

ExamRoom.prototype.seat = function() {
    let n = this.arr.length;
    if(n === 0){
        this.arr.push(0);
        return 0;
    }
    else if(n === 1){
        if(this.arr[0] !== 0 && this.arr[0] >= this.N - 1 - this.arr[0]){
            this.arr.unshift(0);
            return 0;
        }else if(this.arr[0] !== this.N - 1){
            this.arr.push(this.N - 1);
            return this.N - 1;
        }      
    }
    else{
        let j = 0
        let avg = 0, max = 0, diff = 0;
        for(let i = 1; i < n; i++){
            avg = Math.floor((this.arr[i - 1] + this.arr[i]) / 2);
            diff = avg - this.arr[i - 1];
            if(max < diff){
                max = diff;
                j = i;
            }
        }
        if(this.arr[0] !== 0 && this.arr[n - 1] === this.N - 1){
            if(this.arr[0] >= diff){
                this.arr.unshift(0);
                return 0;
            }
        }else if(this.arr[0] !== 0 && this.arr[n - 1] !== this.N - 1){
            if(this.arr[0] < diff && this.arr[n - 1] - this.arr[n - 2] < diff){
                diff = diff;
            }else{
                if(this.arr[0] >= this.arr[n - 1] - this.arr[n - 2]){
                    this.arr.unshift(0);
                    return 0;
                }else if(this.N - 1 - this.arr[n - 1] >= diff){
                    this.arr.push(this.N - 1);
                    return this.N - 1;
                }
            }
        }else if(max === 0){
            if(this.arr[0] !== 0){
                this.arr.unshift(0)
                return 0;
            }else{
                this.arr.push(this.N - 1);
                return this.N - 1;
            }
        }
        this.arr.splice(j, 0, max + this.arr[j - 1]);
        return max + this.arr[j - 1];
    }
}
ExamRoom.prototype.leave = function(p) {
    let index = this.arr.indexOf(p)
    this.arr.splice(index, 1);
};

let examRoom = new ExamRoom(10);
examRoom.seat();
examRoom.seat();
examRoom.seat();
examRoom.seat();
examRoom.seat();
examRoom.seat();
examRoom.seat();
examRoom.seat();
examRoom.seat();
// examRoom.leave(1);
examRoom.leave(9);
examRoom.seat();
examRoom.seat();
// examRoom.seat();
