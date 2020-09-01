var myAtoi = function(str) {
    var result = [];
    var output;
    str = str.trim(); 
    for(i = 0; i < str.length; i++){
      // print sign
      if(str[i] == "-" || str[i] == "+"){
        result.push(str[i]);
      }
      while (str[0] == "+" || str[0] == "-"){
        if(str[1] == "+"|| str[1] == "-"){
          break;
        }
      }
      // break if meet any char 
      if(isNaN(str[i])){
        break;
      }
      else{
          result.push(str[i]);
      }
    }
    output = result.join("");
    if( output == "+" || output == "-" || output == ""){
      output = 0;
    }
    else if(output < Math.pow(2,31)*-1){
      output = Math.pow(-2,31);
    }
    else if(output > (Math.pow(2,31)-1)){
      output = Math.pow(2,31)-1;
    }
    return output;
}