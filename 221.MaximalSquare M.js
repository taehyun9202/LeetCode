/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    var max = 0;
    for(var i  = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == "0"){continue;}
        else{
          if(i == 0 || j == 0){matrix[i][j] == 1}
          else{
            matrix[i][j] = Math.min(matrix[i-1][j], matrix[i][j-1], matrix[i-1][j-1])+1;
          }
          if(matrix[i][j] > max){max = matrix[i][j];}
        }      
      }
    }
    return Math.pow(max,2);
};

console.log(maximalSquare)