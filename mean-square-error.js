var solution = function(firstArray, secondArray) {
    if (firstArray.length === secondArray.length){
        let sum = 0;
        for (let i=0; i<firstArray.length; i++){
            sum += (firstArray[i] - secondArray[i])**2
        }
        return sum / firstArray.length
    }
}
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]))

// [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
// [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
// [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
