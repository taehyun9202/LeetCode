const mergeSort = (arr) => {
  if(arr.length <= 1){
    return arr;
  }
  var mid = Math.floor((arr.length)/2)
  var left = arr.slice(0,mid)
  var right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}


const merge = (left, right) => {
  var result = []
  while(left.length && right.length){
    if(left[0] > right[0]){
      result.push(right[0])
      right.shift()
    }
    else{
      result.push(left[0])
      left.shift()
    }
  }
  result = result.concat(left)
  result = result.concat(right)
  return result
}

console.log(mergeSort([6,3,7,1,9,2,5,8,4,12,15,16,13,14,13]))