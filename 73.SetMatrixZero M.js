/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    var zeroAt = [];
    for(var i = 0; i< matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 0){
            zeroAt.push([[i],[j]]);
        }
      }
    }
    for(var a = 0; a < zeroAt.length; a++){
      for(i = 0 ; i < matrix[zeroAt[a][0]].length; i++){
        if(matrix[zeroAt[a][0]][i] == 0){continue;}
        else{
          matrix[zeroAt[a][0]][i] = 0;
        }
      }
      for(j = 0; j < matrix.length; j++){
        matrix[j][zeroAt[a][1]] = 0;
      }
    }
};