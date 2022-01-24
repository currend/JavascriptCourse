// console.log(2 == 2);
// console.log(2 == 2.0);
// console.log(2 === 2.0);
// /*All true*/

// /*Triple equal checks if it is exactly the same object on
// both sides*/

// console.log('' === '');
// let myVar = ''
// let myVar2 = ''
// console.log(myVar == myVar2);
// console.log(myVar === myVar2);

// /*All true with strings*/

// /*Now let's work with objects*/

// let myVar3 = {}
// let myVar4 = {}
// console.log(myVar3 === myVar4); /*False*/
// /*== (equality), === (identity)*/

// /*To get it to be true, you need to make them reference the same object*/


myVar = {}
myVar2 = myVar
console.log(myVar === myVar2);
/*Double equal checks if the value are equal; triple equal used if the objects being referenced are the same*/

