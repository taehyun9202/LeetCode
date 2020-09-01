/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var a = 0; // ()
    var b = 0; // {}
    var c = 0; // []
    var arr = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] == "("){
            a++;
            arr.push(s[i]);
            continue;
        }
        else if(s[i] == "{"){
            b++;
            arr.push(s[i]);
            continue;
        }
        else if(s[i] == "["){
            c++;
            arr.push(s[i]);
            continue;
        }
        if(s[i] == ")" && a > 0){
            if(arr[arr.length-1] != "("){return false;}
            arr.pop();
            a--;
        }
        else if(s[i] == "}" && b > 0){
            if(arr[arr.length-1] != "{"){return false;}
            arr.pop();
            b--;
        }
        else if(s[i] == "]" && c > 0){
            if(arr[arr.length-1] != "["){return false;}
            arr.pop();
            c--;
        }
        else{return false;}
        if( a < 0 || b < 0 || c < 0){return false;}
    }
    if (a == 0 && b == 0 && c ==0){return true;}
    else{return false;}
};