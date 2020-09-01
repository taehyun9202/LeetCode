/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var count = 0;
    var valid = 0;
    var longest;
    var temp = new Array(1).fill("");
    for(var i = 0; i < s.length; i++){
      if(s[i] == "("){
        temp[valid] += s[i];
        count++;
      }
      else if(s[i] == ")"){
        if(count > 0){
          temp[valid] += s[i];
        }
        count--;
      }
      if(count < 0){
        if(temp[valid].length < 2){
          count = 0;
        }
        else{
          temp.push(Array(1).fill(""));  
          valid ++;
          count = 0;
        }
      }  
    }
    if(count != 0){
     if(temp[valid][(temp[valid].length-1)] != ")"){
       temp[valid] = temp[valid].substring(0, temp[valid].length - 1);
       count--;
     }
     for(var j = 0; j< count; j++){
        temp[valid] = temp[valid].substr(1);
      }
    }
    longest = temp[0];
    for(var k = 1; k < temp.length; k++){
      if(temp[k].length >= longest.length){
        longest = temp[k];
      }
    }
    return longest.length;
  };
  