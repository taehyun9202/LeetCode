/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(var i = 1; i < nums.length; i++){
      var num = nums[0];
      if(nums[i] == num){
        nums.splice(i, 1);
        nums.splice(0, 1);
        i = 0;
      }
    }
    return nums[0];
  };