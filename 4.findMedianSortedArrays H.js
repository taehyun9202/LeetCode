/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums1;
    var nums2;
    var newarr = [];
    var temp = [];
    var count = 0;
    //switch if index 0 of nums1 is greater than that of nums2
    if( nums1[0] > nums2[0]){
        temp = nums2;
        nums2 = nums1;
        nums1 = temp;
    }
    if (nums1.length == 0){
        newarr = nums2;
    }
    if (nums2.length == 0){
        newarr = nums1;
    }
    else{
        //combine two arrays into new sorted array
        for(var i = 0; i< nums1.length; i++){
            newarr.push(nums1[i]);
            for(var j = count; j < nums2.length; j++){
                if( nums2[j] < nums1[i+1]){
                    newarr.push(nums2[j]);
                    count++;
                }
                else if ( i == nums1.length-1){
                    newarr.push(nums2[j]);   
                    count++;
                }
                else{
                  break;
                }
            }
        }
    }
    
    //find Median
    var middle = newarr.length/2
    if(middle % 1 > 0){
        middle = ~~middle;
        return newarr[middle];
    }
    else{
        return (newarr[middle-1] + newarr[middle])/2;
    }
}