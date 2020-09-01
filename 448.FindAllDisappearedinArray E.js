/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var arr = [];
    for(var i = 1; i < nums.length+1; i++){
      if(nums.includes(i) !== true){
        arr.push(i);
      }
    }
    return arr;
};