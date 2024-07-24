/* 1. The Dice Game
Write a function that will emulate a game of dice, a given number of players take turns throwing the dice,
each eventually throwing the same number of times (should work with any number of times specified in the
variable). Whoever accumulates the highest amount wins. If the amounts are equal then it is a draw.
Print the results to the console.*/
let rollDice = () => Math.floor(Math.random() * 6) + 1;

let playDiceGame = (numberOfPlayers, numberOfRounds) => {
    let arrayOfScores = Array(numberOfPlayers).fill(0);
    let idsOfWinners = [];

    for (let i = 0; i < numberOfRounds; i++) {
        for (let j = 0; j < numberOfPlayers; j++) {
            arrayOfScores[j] += rollDice();
        }
    }

    let maxScoreInArray = Math.max(...arrayOfScores);

    arrayOfScores.forEach((score, index) => {
        if (score === maxScoreInArray){
            idsOfWinners.push(index);
        }
    });

    console.log(arrayOfScores);

    if (idsOfWinners.length === 1){
        console.log("The winner is a player with id=" + idsOfWinners);
    } else {
        console.log("It's a draw between players with ids: " + idsOfWinners);
    }
};
console.log("1. The Dice Game:");
playDiceGame(3,2);

/*Task 2: Split Number into Random Parts
Write a function that will split a number into a given number of random numbers whose sum will be
equal to the original number. Example: split 15 into 3 parts (the sum of four numbers will be equal
to 15) (4,6,5) - Your code should work with any number specified in a variable (not just 15) and with
any number of parts into which the number needs to be split. .
a. numbers the original number is an integer, the split numbers are integers (4,6,5)
b. breakdown numbers are fractional with 2 decimal places 4.55, 5.20, 5.25)*/
let number = 10.15;
let parts = 2;
let splitNumberIntoRandomParts = (number, numberOfParts, isFractional = false) => {
let result = Array(numberOfParts).fill(0);
let sum = 0;

if(isFractional){
    for (let i = 0; i < numberOfParts - 1; i++){
        result[i] = Math.round(Math.random() * (number - sum) * 100) / 100;
        sum += result[i];
    }
    result[numberOfParts - 1] = (number - sum).toFixed(2);
} else {
    for (let i = 0; i < numberOfParts - 1; i++){
        result[i] = Math.floor(Math.random() * (number - sum));
        sum += result[i];
    }
    result[numberOfParts - 1] = number - sum;
}

return result;
};
console.log("2. Split Number Into Parts:")
console.log("The number=" + number + " Number of parts=" + parts + " Random parts: "
    + splitNumberIntoRandomParts(number, parts, true));

/*3. Count Friday the 13ths
Write a function that counts the number of Friday the 13th from any given date in the past until today.
Your code should be able to count the number of days on any initial date specified in a variable and count
correctly after 10-15-20 years
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ date)*/
let startDate = "2022-01-11";

let returnFriday13ths = (startDate) => {
let count = 0;
let today = new Date();
let currentDate = new Date(startDate);

while(currentDate <= today){
    if(currentDate.getDate() === 13 && currentDate.getDay() === 5){
        count++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
}
return count;
};
console.log("3. Count Friday the 13ths:")
console.log("Number of Friday 13ths: " + returnFriday13ths(startDate) + " starting from " + startDate);