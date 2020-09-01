var multiply = function(num1, num2) {
  var rise = 0;
  var count2 = 0;
  var arr = [];
  for(var i = num1.length-1; i >= 0; i--){
    var count = 0;
    var sum = 0;
    for(var j = num2.length-1; j >= 0; j--){
      var mult = 0;
      mult = (num1[i] * num2[j] + rise)* Math.pow(10,count) * Math.pow(10,count2);
      rise = 0;
      count++;
      sum = mult + sum;
    }
    arr.push(sum);
    count2++;
  }
  var total = arr.reduce(function(a, b){
    return a + b;
  }, 0);
  return total.toString();
};
