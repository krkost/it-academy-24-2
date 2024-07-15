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
console.log(checkSumOfHalvesOfString(str));

/*2. Divide by 2 until less than 50
Given a number n=1000 (any number can be given). Divide it by 2 as many times as possible until the result of the
division is less than 50 (can be any given number). What number will you get? Count the number of iterations required
for this (an iteration is a loop through) and record it in the num variable.*/

/*3. Arithmetic mean of array elements
Given an array arr. Find the arithmetic mean of its elements. Test the problem on an array with elements 12, 15, 20, 25,
59, 79.*/

/*4. Insert data into array at a given location
Write a function that will insert data into an array from a given location in the array. Given an array [1, 2, 3, 4, 5].
Make it an array [1, 2, 3, 'a', 'b', 'c', 4, 5].*/

/*5. Insert data into array at multiple locations
Write a function that will insert data into an array at given multiple locations in the array. Given an array [1, 2, 3,
4, 5]. Make it into an array [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/

/*6. Sort an Array
Given an array [3, 4, 1, 2, 7. 30. 50]. Sort it.*/