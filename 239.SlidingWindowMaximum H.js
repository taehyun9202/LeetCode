var maxSlidingWindow = function(nums, k) {
    var output = [];
    for(var i = 0; i < nums.length-k+1; i++){
      var max = Math.max(...nums.slice(i,i+k));
      output.push(max);
    }
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],4))