/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var arr = [];
    var obj = {};
    for(var item of strs){
      var base = item.split('').sort();
      if(obj[base] == null){
          obj[base] = [item];
      } else{
          obj[base].push(item)
      }
    }
    for(var a in obj){
        arr.push(obj[a]);
    }
    return arr;
};