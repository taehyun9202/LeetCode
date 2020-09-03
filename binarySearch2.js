var len = [17, 15, 18, 20]
const slice = (arr, target) =>{
  var start = 0
  var end = Math.max(...arr)
  while (start <= end){
    var sum = 0
    var mid = Math.floor((start+end)/2)
    for(var i in arr){
      if(arr[i] > mid){
        sum += (arr[i]-mid)
      }
    }
    if(sum == target){
      return mid
    }
    else if(sum > target){
      start = mid + 1
    }
    else{
      end = mid - 1
    }
  }
  return false
}
console.log(slice(len,30))