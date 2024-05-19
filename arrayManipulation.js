const createUserProfiles = require('./userInfo');

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

function formatArrayStrings(strings,numbers){

    const result = [];
    for (let i = 0; i < strings.length; i++){
        if(numbers[i] % 2 === 0){
            result[i] = strings[i].toUpperCase();
        }else{
            result[i] =strings[i].toLowerCase();
        }
    }
    return result;
}

const realArray = [1,2,3,4,5,6,7,8,9];
const resultArray = processArray(realArray);

const realStrings = ["Black" , "Purple" , "Camo" , "Gold" , "Blue" , "Wine" , "White"];
const resultStrings = formatArrayStrings(realStrings,realArray);

const userProfiles = createUserProfiles(realStrings,resultStrings);


console.log("The real array is:", realArray);
console.log("The final array is:", resultArray);

console.log("The real strings are: ",realStrings);
console.log("The result strings are:",resultStrings);
console.log("User Profiles:",userProfiles);