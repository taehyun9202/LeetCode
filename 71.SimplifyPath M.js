/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split("/").filter(a => a && a !== ".")
    var output = [];
    for(var i = 0; i < path.length; i++){
      if(path[i] == ".." ){
          output.pop();
          continue;
      }
      else{
       output.push(path[i]);
      }
    }
    
    return "/" + output.join("/");
}  