var nextPermutation = function(nums) {
    var org = nums;
    if(nums.length < 2){return nums;}
    nums = nums.sort((a, b) => a - b);  
    function change(nums){
      var len = nums.length-1;
      var temp = nums[len-1];
      nums[len-1] = nums[len];
      nums[len] = temp;
      len--;
    }
    if(org == nums){
      change(nums);
    }
    return nums;
};