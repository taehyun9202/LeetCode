/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0){return false}
    var count = 0;
    var y = x;
    var z = x;
    var temp;
    var comp = 0;
    while (y > 1){
      y = y / 10;
      count++;
    }
    if(count > 0){
      count--;
    }
    while(z >= 1){
      temp  = z % 10;
      z /= 10;
      temp = ~~temp;
      comp += temp * Math.pow(10, count);
      count --;
    }
    comp = ~~comp;
    if(x == comp){return true}
    else{return false}
  }