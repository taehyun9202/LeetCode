array= [1, 2, 3,4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 20, 24, 26, 28, 32, 37, 40, 42,45,46,47,50,51,52,53,56,67]

var array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
//binary
const binarysearch = (array, target) =>{
    var left = 0
    var right = array.length-1
    while (left <= right){
        var mid = array[Math.floor((left+right)/2)]
        if(array[mid] == target){
            return true
        }
        else if(array[mid] < target){
            left = mid + 1
        }
        else{
            right = mid - 1
        }
    }
    return false
}
console.log(binarysearch(array2,2))