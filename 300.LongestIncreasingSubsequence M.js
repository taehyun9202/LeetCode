var lengthOfLIS = function(nums) {
  if(nums.length == 1)return 1; 
  var arr = new Array(nums.length).fill(1);
  var output = 0;
  for(var i = 1; i < nums.length; i++){
    var count = 1;
    for(var j = 0; j < i; j++){
      if(nums[i] > nums[j]){
        count = Math.max(count, arr[j]+1);
      }
      arr[i] = count;
      output = Math.max(output, arr[i]);
    }
  }
  return output;
};