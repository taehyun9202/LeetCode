var findDuplicate = function(nums) {
    var obj = {};
    for(var i = 0; i < nums.length; i++){
      var base = nums[i];
      if(obj[base] == null){
        obj[base] = 1; 
      }
      else{return base;}
    }
};

console.log(findDuplicate([1,2,3,5,2,2,5,3,8,8,3]))