/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var count = 1;
    for(var i = 1; i < nums.length; i++){
        if(nums[i] == nums[i-1]){
            count++;
            if(count > 2){
              nums.splice(i, 1);
              i--;
              count = 2;
            }
        }
        else{
            count = 1;
        }
    }
};