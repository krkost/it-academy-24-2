// 1. The Dice Game
/*Write a function that will emulate a game of dice, a given number of players take turns throwing the dice,
each eventually throwing the same number of times (should work with any number of times specified in the
variable). Whoever accumulates the highest amount wins. If the amounts are equal then it is a draw.
Print the results to the console.*/
let rollDice = () => Math.floor(Math.random() * 6) + 1;

let playDiceGame = (numberOfPlayers, numberOfRounds) => {
    let arrayOfScores = Array(numberOfPlayers).fill(0);
    let idsOfWinners = [];

    for(let i = 0; i < numberOfRounds; i++) {
        for (let j = 0; j < numberOfPlayers; j++) {
            arrayOfScores[j] += rollDice();
        }
    }

    let maxScoreInArray = Math.max(...arrayOfScores);

    arrayOfScores.forEach((score, index) => {
        if(score === maxScoreInArray){
            idsOfWinners.push(index);
        }
    });

    console.log(arrayOfScores);

    if(idsOfWinners.length === 1){
        console.log("The winner is a player with id=" + idsOfWinners);
    } else {
        console.log("It's a draw between players with ids: " + idsOfWinners);
    }
};

playDiceGame(3,2);
