/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0];
    var max = 0;
    var profit = 0;
    var temp = 0;
    for(var i = 0; i < prices.length; i++){
      if(prices[i] < min){
        min = prices[i];
        max = 0;
      }
      if(prices[i] > max){
        max = prices[i];
        temp = max - min;  
      }
      if(temp > profit){
        profit = temp;
      }
    }
    return profit;
  };