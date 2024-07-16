let array = [1, 2, 55, 3, 73, 4, 1, 55, 6, 2];
console.log("Initial array: " + array);

//1. Change the array in reverse order
function reverseArray(arr){
    let array = arr.slice();
    return array.reverse();
}
console.log("1. Reversed array: " + reverseArray(array));

//2. Find the max value in the array
function returnMaxValueInArray(arr){
    return Math.max(...arr);
}
console.log("2. Max value in the array: " + returnMaxValueInArray(array));

//3. The Fibonacci series into the array starting from N member with array length M
let n = 4;
let m = 5;
function returnFibonacciSeries(n, m){
    let result = [0, 1];

    for(let i = 2; i < n + m; i++){
        result[i] = result[i - 1] + result[i - 2];
    }

    return result.slice(n, n + m);
}
console.log("3. Fibonacci series for n=" + n + " and m=" + m + ": " + returnFibonacciSeries(n, m));

//4. Compare two 4-digit numbers for matching digits
let number1 = 3780;
let number2 = 3784;

function splitNumberIntoDigits(num){
    return num.toString().split('').map(Number);
}

function compareTwoNumbersForMatchingDigits(num1, num2){
    let num1Array = splitNumberIntoDigits(num1);
    let num2Array = splitNumberIntoDigits(num2);

    let digitMatchCount = 0;
    let exactMatchCount = 0;

    for(let i = 0; i < num1Array.length; i++){
        for(let j = 0; j < num2Array.length; j++){
            if(num1Array[i] === num2Array[j]){
                digitMatchCount++;
                if(i === j){
                    exactMatchCount++;
                }
            }
        }
    }
    digitMatchCount-=exactMatchCount;

    return {digitMatchCount, exactMatchCount};
}
console.log("4. Compare numbers for matching digits: number1=" + number1 + ", number2=" + number2);
console.log(compareTwoNumbersForMatchingDigits(number1, number2));

//5. Sort the array in ascending/descending order
function sortArrayAscending(array){
    return array.slice().sort((a, b) => a - b);
}

function  sortArrayDescending(array){
    return array.slice().sort((a, b) => b - a);
}
console.log("5.1. Ascending sort: " + sortArrayAscending(array));
console.log("5.2. Descending sort: " + sortArrayDescending(array));

//6. Remove all duplicate elements from the array
function removeDuplicatesFromArray(array){
    return [...new Set(array)];
}
console.log("6. Array without duplicates: " + removeDuplicatesFromArray(array));