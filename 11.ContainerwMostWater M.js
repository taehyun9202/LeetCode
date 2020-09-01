/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var temp = 0;
    var tank = 0;
    var left = 0;
    var right = 0;
    //set temp
    if(height[0] <= height[1]){
        temp = height[0];
    }
    else{
        temp = height[1];
    }
    for(var i = 0; i < height.length; i++){
        for(var j = i; j < height.length; j++){            
            //measure tank area;
            if(height[i]<=height[j]){
                tank = height[i]*(j-i);
            }
            else{
                tank = height[j]*(j-i);
            }
            if(tank > temp){
                left = height[i];
                right = height[j];
                temp = tank;
            }
        }
    }
    return temp;
}