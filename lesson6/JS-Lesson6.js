//1. Change the array in reverse order
let arrayForReverse = [1, 2, 3, 4, 5, 6];
function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray(arrayForReverse));

//2. Find the max value in the array
let arrayForMaxValue = [1, 24, 3, 4, 5, 6];
function returnMaxValueInArray(arr){
    return Math.max(...arr);
}
console.log(returnMaxValueInArray(arrayForMaxValue));

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
console.log(returnFibonacciSeries(n, m));

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
console.log(compareTwoNumbersForMatchingDigits(number1, number2));

//5. Sort the array in ascending/descending order
let arrayForSort = [34, 82, 11, 3, 1, 2];

function sortArrayAscending(array){
    return array.slice().sort((a, b) => a - b);
}

function  sortArrayDescending(array){
    return array.slice().sort((a, b) => b - a);
}
console.log(sortArrayAscending(arrayForSort));
console.log((sortArrayDescending(arrayForSort)));

//6. Remove all duplicate elements from the array
let arrayForRemovingDuplicates = [1, 22, 45, 3, 45, 2, 22];

function removeDuplicatesFromArray(array){
    return [...new Set(array)];
}
console.log(removeDuplicatesFromArray(arrayForRemovingDuplicates));