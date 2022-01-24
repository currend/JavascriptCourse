let numOne = 22
let numTwo = 7

result = 22/7

/*Using the number library*/
//console.log(result.toFixed(2));

/*Using number and math library*/
//let floatRes = result.toFixed(2)
//console.log(Math.floor(floatRes));
//console.log(Math.ceil(floatRes));

/*Random function*/
//console.log(Math.random()); /*gives random number between 0 and 1

/*Now for the dice*/
let lowBound = 1
let upperBound = 6

let myRand = Math.floor(Math.random() * (upperBound - lowBound + 1)) +lowBound /*generates number between the boundaries*/

console.log(myRand);

/*1-10 dice*/
let diceRoll = Math.ceil(Math.random() * 10)
console.log(diceRoll);




