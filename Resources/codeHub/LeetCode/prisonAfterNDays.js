/*
There are 8 prison cells in a row, and each cell is either occupied or vacant.

Each day, whether the cell is occupied or vacant changes according to the following rules:

If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
Otherwise, it becomes vacant.
(Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.)

We describe the current state of the prison in the following way: cells[i] == 1 if the i-th cell is occupied, else cells[i] == 0.

Given the initial state of the prison, return the state of the prison after N days (and N such changes described above.)

LeetCode: 957. Prison Cells After N Days
*/

var prisonAfterNDays = function(cells, N) {
    N = (N % 14 === 0) ? 14 : N % 14;
    for(let i = 1; i <= N; i++){
        let cell = [...cells];
        for(let j = 1; j < cells.length; j++){
            if((cells[j - 1] === 0 && cells[j + 1] === 0) 
             ||(cells[j - 1] === 1 && cells[j + 1] === 1)){
                cell[j] = 1;
            }else{
                cell[j] = 0;
            }
        }
        cells = cell;
        if(i === 1) cells[0] = 0, cells[cells.length - 1] = 0;
    }
    return cells
};
prisonAfterNDays([0,1,0,1,1,0,0,1], 7)