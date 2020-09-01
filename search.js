array= [1, 2, 3,4, 5, 6, 7, 8, 9, 12, 15, 16, 17, 20, 24, 26, 28, 32, 37, 40, 42,45,46,47,50,51,52,53,56,67]

array2 = [1,2,3,4,5,6,7,8,9]

const search = (array) =>{
    for (var i = 0; i < array.length; i++){
        console.log(array[i])
        if(array[i] == 3)
            return true
    }
    return false
}
console.log(search(array2))