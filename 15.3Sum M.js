var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    var arr = new Array().fill();
    for(var i = 0; i< nums.length-2;i++){
        var j = i + 1;
        var k = nums.length-1;
        if(nums[i] == nums[i-1]){
            continue;
        }
        while(k > j){
            if(-nums[i] == nums[j] + nums[k]){
                arr.push([nums[i], nums[j], nums[k]]);
                while(j < k && nums[j] === nums[j+1]) j++;
                while(j < k && nums[k] === nums[k-1]) k--;
                j++;
                k--
            }
            else if(nums[j] + nums[k] < -nums[i]){
                j++;
            }
            else if(nums[j] + nums[k] > -nums[i]){
                k--;
            }
        }
    }
  return arr;
};