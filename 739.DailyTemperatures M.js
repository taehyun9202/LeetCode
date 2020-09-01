var dailyTemperatures = function(T) {
    var output = [];
    for(var i = 0; i < T.length; i++){
      for(var j = i+1; j < T.length; j++){
        if(T[j] > T[i]){
          output.push(j-i);
          break;
        }
        else{
        }
      }
      if(output.length-1 != i){
        output.push(0);
      }
    }
    return output;
};