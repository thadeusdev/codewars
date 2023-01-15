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
