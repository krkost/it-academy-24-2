/*1. Sum of Halves of a String
Given a string of an even number of digits. Check that the sum of the first half of the digits equals the sum of the
second half of the digits. If so, print 'yes', otherwise print 'no'.*/
let str = "123330";
let checkSumOfHalvesOfString = (str) => {
    if(str.length % 2 !== 0){
        return "no";
    }

    let charArray = str.split('');
    let numArray = charArray.map(char => Number(char));

    let half = numArray.length / 2;
    let firstHalfSum = 0;
    let secondHalfSum = 0;

    for(let i = 0; i < half; i++){
        firstHalfSum += numArray[i];
        secondHalfSum += numArray[half + i];
    }

    if(firstHalfSum === secondHalfSum){
        return "yes";
    }

    return "no";
};
console.log("1. Sum of Halves of a String");
console.log("String: " + str + ". The sum of the first half of the digits equals the sum of the\n" +
    "second half of the digits - " + checkSumOfHalvesOfString(str));

/*2. Divide by given number until not greater than 50
Given a number n=1000 (any number can be given). Divide it by 2 as many times as possible until the result of the
division is less than 50 (can be any given number). What number will you get? Count the number of iterations required
for this (an iteration is a loop through) and record it in the num variable.*/
let num = 500;
let divideByNumberUntilNotGreaterThan50 = (number, divideToNumber) => {
    let count = 0;

    while (number >= 50){
        number /= divideToNumber;
        count++;
    }
    return {result: number, iterations: count};
};
let res = divideByNumberUntilNotGreaterThan50(num, 2);
console.log("2. Divide by 2 until not greater than 50");
console.log("Initial number: " + num + ". Result number: " + res.result + ". Number of iterations: " + res.iterations);

/*3. Arithmetic mean of array elements
Given an array arr. Find the arithmetic mean of its elements. Test the task on an array with elements 12, 15, 20, 25,
59, 79.*/
let arrayForArithmeticMean = [12, 15, 20, 25, 59, 79];

let returnArithmeticMean = (arr) => {
    let sumOfArrayElements = 0;

    for (let i = 0; i < arr.length; i++){
        sumOfArrayElements += arr[i];
    }

    return sumOfArrayElements/arr.length;
};
console.log("3. Arithmetic mean of array elements");
console.log("Array: " + arrayForArithmeticMean + ". Arithmetic Mean: " + returnArithmeticMean(arrayForArithmeticMean));

/*4. Insert data into array at a given location
Write a function that will insert data into an array from a given location in the array. Given an array [1, 2, 3, 4, 5].
Make it an array [1, 2, 3, 'a', 'b', 'c', 4, 5].*/
let arrayForInsertionAtGivenLocation = [1, 2, 3, 4, 5];
let arrayForExtension = ['a', 'b', 'c'];
let location = 3;

let insertDataAtLocation = (array, data, location) => {
    let copyOfArray = array.slice();
    copyOfArray.splice(location, 0, ...data);
    return copyOfArray;
};
console.log("4. Insert data into array at a given location");
console.log("Initial array: " + arrayForInsertionAtGivenLocation + ". Array for extension: " + arrayForExtension +
". Location for insertion: " + location + ". Combined array: " + insertDataAtLocation(arrayForInsertionAtGivenLocation,
        arrayForExtension, location));

/*5. Insert data into array at multiple locations
Write a function that will insert data into an array at given multiple locations in the array. Given an array [1, 2, 3,
4, 5]. Make it into an array [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
let arrayForInsertionAtMultipleLocations = [1, 2, 3, 4, 5];
let arrayForExtensionAtMultipleLocations = ['a', 'b', 'c', 'e'];
let locations = [1, 2, 6, 8];

let insertDataAtMultipleLocations = (array, data, locations) => {
    let copyOfArray = array.slice();

    for (let i = 0; i < locations.length; i++) {
        copyOfArray.splice(locations[i], 0, data[i]);
    }

    return copyOfArray;
}

console.log("5. Insert data into array at multiple locations");
console.log("Initial array: " + arrayForInsertionAtMultipleLocations + ". Array for extension: " +
    arrayForExtensionAtMultipleLocations + ". Locations for insertion: " + locations + ". Combined array: "
    + insertDataAtMultipleLocations(arrayForInsertionAtMultipleLocations, arrayForExtensionAtMultipleLocations,
        locations));

/*6. Sort an Array
Given an array [3, 4, 1, 2, 7. 30. 50]. Sort it.*/
let arrayForSort = [3, 4, 1, 2, 7, 30, 50];

let sortArrayAscending = (array) => {
    return array.slice().sort((a, b) => a - b);
};
console.log("6. Sort an array");
console.log("Initial array: " + arrayForSort + ". Sorted array: " + sortArrayAscending(arrayForSort));

