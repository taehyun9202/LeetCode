/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var o = x;
    var y = 0;
    var temp;
    var count = 0;
    while (Math.abs(x) >= 1){
        x /= 10;
        count++;
    }
    if(count == 0){
        return x;
    }
    x = o;
    count--;
    while (Math.abs(x) >= 1){
        temp  = x % 10;
        if(temp == 0){
          x /= 10;
          count--;
        }
        else{
          x /= 10;
          temp = ~~temp;
          y += temp * Math.pow(10, count);
          count --;
        }
    }
      
    if( y < Math.pow(-2,31)){
        return 0;
    }
    else if ( y > Math.pow(2,31)-1){
        return 0;
    } 
    else{
      return y;
    }
  }