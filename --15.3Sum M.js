var threeSum = function(nums) {
    var sum = 0;
    var answer = [];
    var arr = [];
    if(nums.length < 3){return answer;}
    nums = nums.sort((a, b) => a - b)
    for(var i = 0; i < nums.length-2; i++){
      var j = i + 1;
      var k = nums.length - 1;
      if(nums[i] == nums[i-1]){continue;}
      while(k >= j){
        if(nums[k] == nums[k+1] && k > j){k--;}
        if(nums[j] == nums[j-1] && (i != j-1)){
          while(nums[j] != nums[j+1]){
            j++
          }
          // if(nums[j] != nums[j-1]){
          //   continue;
          // }
          // else{
          //   j++
          // }
        }
        sum = nums[i] + nums[j] +nums[k];
        if(sum == 0 && i != j && j != k && i != k && k > j){
          arr.push(nums[i]);
          arr.push(nums[j]);
          arr.push(nums[k]);
          answer.push(arr);
          arr = [];
        }
        if(k == j){
          k = nums.length-1;
          j++;
          continue;
        }
        k--;
      }
    }
    return answer;
  }
  console.log(threeSum([-4,-2,-2,-2,0,1,2,3,4,6]));