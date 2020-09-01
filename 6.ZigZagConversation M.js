var convert = function(s, numRows) {  
    var string = new Array(numRows).fill("");
    var asc = 0;  //0 = descending
                    //1 = ascending
    var row = 0;  //number of row;
    var output = [];
    if (numRows === 1){
        return s;
    }
    else{
        for(var i = 0; i < s.length; i++){
        string[row] += s[i];
        if(asc == 0){
            while(row < numRows){
            row++;
            if(row == numRows-1){
                asc = 1;
            }
            break;
            }
        }
        else if(asc == 1){
            while(row > 0){
            row--;
            if(row == 0){
                asc = 0;
            }
            break;
            }
        }
        } 
    for(var st = 0; st < numRows; st++){
        output.push(string[st]);
    }
    output = string.join("");
    return output;
    }
}
console.log(convert("PAYPALISHIRING",4));