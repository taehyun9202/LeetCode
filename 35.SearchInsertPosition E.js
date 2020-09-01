var searchInsert = function(nums, target) {
    
    if(target < nums[0]){return 0}
    else if(target > nums[nums.length-1]){return nums.length}
    else{
        var left = 0;
        var right = nums.length;
        while(left<=right){
            var mid = Math.floor((left+right)/2);
            if(target == nums[mid] || (target < nums[mid] && target > nums[mid-1]) ){
               return mid
            }else if(target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }  
};