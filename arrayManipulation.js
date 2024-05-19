function processArray(arr){
    const result = [];
    for(let i = 0; i < arr.length; i++){
     let number = arr[i];
     if (number % 2 === 0){
        result[i] = number ** 2;
     }else{
        result[i] = number * 3;
     }
    }

    return result;
}

const realArray = [1,2,3,4,5,6,7,8,9];
const resultArray = processArray(realArray);
console.log("The real array is:", realArray);
console.log("The final array is:", resultArray);