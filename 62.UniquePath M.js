/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var row = [];
    for(var i = 0; i < n; i ++){
        row.push(1);
    }
    var map = new Array(m).fill(row);
    for(var a = 1; a < m; a++){
        for(var b = 1; b< n; b++){
        map[a][b] = map[a][b-1] + map[a-1][b];
        }
    }
    return map[m-1][n-1];
};