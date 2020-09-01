/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length < 1){return []};
  intervals.sort(function(a, b){
    return a[0] - b[0]; 
  });
  var arr = [intervals[0]]; 
  for(var i = 1; i < intervals.length; i++){
    if(intervals[i][0] > arr[arr.length-1][1]){
      arr.push(intervals[i]);
    }
    else if(intervals[i][1] >= arr[arr.length-1][1]){
      if(intervals[i][0] < arr[arr.length-1][0]){
        arr[arr.length-1][0] = intervals[i][0];
      }
      else{
        arr[arr.length-1][1] = intervals[i][1];
      }
    }
    else if(intervals[i][1] < arr[arr.length-1][1] && intervals[i][0] >= arr[arr.length-1][1]){
      intervals[arr.length-1][1] = intervals[i][1];
    }
  }
  return arr;
};
