/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var sum = 0;
    var arr = [];
    var max = 0;
    var neg = nums[0];
    for(var i = 0; i < nums.length; i++){
      sum += nums[i];
      arr.push(sum);
      if(sum < 0){
        sum = 0;
      }
      if(sum > max){
        max = sum;
      }
      //neg
      if(neg < nums[i]){
        neg = nums[i]
      }
    }
    if(max <= 0){
        max = neg;
    }
    return max;
};