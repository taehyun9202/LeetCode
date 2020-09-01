var isValidSudoku = function(board) {
    //row
    for(var i = 0; i < 9; i++){
      if(validation(board[i]) == false){
        return false;
      }
    }
    //col
    for(var i = 0; i < 9; i++){
      var arr = [];
      for(var j = 0; j < 9; j++){
        arr.push(board[j][i]);
      }
      if(validation(arr) == false){
        return false;
      }
    }
    ////box  (wrong)
    for(var i = 0; i < 9; i += 3){ // col
        for(var j = 0; j < 9; j += 3){ // row
        var arr = [];
        for( var a = 0; a < 3; a++){  
            for(var b = 0; b < 3; b++){
            arr.push(board[b][a]);
            }
            if(validation(arr) == false){
            return false;
            }
        }
        }
    }
    return true;
  };
  function validation(arr){
    var dup = new Map();
    for(var i = 0; i < arr.length; i++){
      if(arr[i] == "."){
        continue;
      }
      else if(dup.has(arr[i])){
        return false;
      }
      else{
        var index = dup.set(arr[i]);
      }
    }
    return true 
  }