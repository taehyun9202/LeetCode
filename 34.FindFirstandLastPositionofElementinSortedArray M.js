/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var arr = [];
    var output = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] == target){
            arr.push(i);
        }
        if(nums[i] > target){
          break;
        }
    }
    if(arr.length < 1) return [-1,-1];
    output.push(arr[0]);
    output.push(arr[arr.length-1])
    return output;
};