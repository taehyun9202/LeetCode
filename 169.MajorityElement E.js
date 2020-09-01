/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majority = Math.floor(nums.length/2);
    var obj = {};
    for(var i = 0; i < nums.length; i++){
      var base = nums[i];
      if(obj[base] == null){obj[base] = 1;}
      else{obj[base]++;}
    }
    for(var key in obj){
      if(obj[key] > majority){return Number(key);}
    }
};