/*
You are given an n x n 2D matrix representing an image.
Rotate the image by 90 degrees (clockwise).

48. Rotate Image
*/

let rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
//         let k = matrix[0].length - 1
        for(let j = i; j < matrix[i].length; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }        
    }
    for(let i = 0; i< matrix.length; i++){
            let k = 0;
			let len = matrix[i].length-1;
           while(k <= len){
				let temp = matrix[i][k];
				matrix[i][k] = matrix[i][len];
				matrix[i][len] = temp;
				k++;
				len--;
				
			}
			
       }
    return matrix;
};
rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])