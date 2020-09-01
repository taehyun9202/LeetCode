/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    var output = [];
    var found = 0;
    var base = p.split('').sort();
    for(var i = 0; i < s.length-p.length+1; i++){
      var check = [];
      for(var j = i; j < p.length + i; j++){
        check.push(s[j]);
        check.sort();
      }
      for(var k = 0; k < check.length; k++){
        if(base[k] == check[k]){
          found = 1;
        }
        else{
          found = 0;
          break;
        }
      }
      if(found == 1){output.push(i);}
    }
    return output;
};