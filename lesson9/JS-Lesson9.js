const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/*1. Make 3 promises, each of which contains a setTimeout function with a random delay from 1 to 5 seconds. Let the
first promise return the number 1, the second return the number 2, and the third return the number 3. Using
Promise.race, wait for the first fired promise to load and display the result of its operation on the screen.*/

const createPromiseWithDelay = (returnValue, minDelay, maxDelay) => {
    return new Promise(resolve => {
        const delay = getRandomNumber(minDelay, maxDelay) * 1000;
        setTimeout(() => resolve(returnValue), delay)
    });
};

const racePromises = async () => {
    const promise1 = createPromiseWithDelay(1, 1,5);
    const promise2 = createPromiseWithDelay(2, 1,5);
    const promise3 = createPromiseWithDelay(3, 1,5);

    const result = await Promise.race([promise1, promise2, promise3]);
    console.log(`First resolved promise result: ${result}`);
};
racePromises();

/*2. Make a getNum function that returns a promise that, with a delay of 3 seconds, will output a random number from 1
to 5. Create an async function that, using await, will wait for the result of getNum, then square it and display it on
the screen.*/


/*3. Make a getNum function that returns a promise that, with a delay of 3 seconds, will print a random number from 1
to 5. Also use the getNum function to return a promise that, with a delay of 5 seconds, will print a random number from
6 to 10. Create an async function , which will use await to wait for the result of the function, then wait for the
result of the second function, and then find the sum of the resulting numbers and print it to the screen.*/