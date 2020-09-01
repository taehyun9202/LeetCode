var addBinary = function(a, b) {
    var i = a.length-1;
    var j = b.length-1;
    var output = "";
    var rise = 0;
     while (i >= 0 || j >= 0){
      if(i < 0){
        if(Number(b[j]) + rise == 2){
          output = 0 + output;
          rise = 1;
        }
        else if(Number(b[j]) + rise == 3){
          output = 1 + output;
          rise = 1;
        }
        else if(Number(b[j]) + rise == 1){
          output = 1 + output;
          rise = 0;
        }
        else if(Number(b[j]) + rise == 0){
          output = 0 + output;
          rise = 0;
        }
        j--;
      }
      else if(j < 0){
        if(Number(a[i]) + rise == 2){
          output = 0 + output;
          rise = 1;
        }
        else if(Number(a[i]) + rise == 3){
          output = 1 + output;
          rise = 1;
        }
        else if(Number(a[i]) + rise == 1){
          output = 1 + output;
          rise = 0;
        }
        else if(Number(a[i]) + rise == 0){
          output = 0 + output;
          rise = 0;
        }
        i--;
      }
      else{ 
        if(Number(a[i]) + Number(b[j]) + rise == 2){
          output = 0 + output;
          rise = 1;
        }
        else if(Number(a[i]) + Number(b[j]) + rise == 3){
          output = 1 + output;
          rise = 1;
        }
        else if(Number(a[i]) + Number(b[j]) + rise == 1){
          output = 1 + output;
          rise = 0;
        }
        else if(Number(a[i]) + Number(b[j]) + rise == 0){
          output = 0 + output;
          rise = 0;
        }
        i--;
        j--;
      }
    }
    if(rise == 1){
      output = 1 + output;
    }
    return output;
};