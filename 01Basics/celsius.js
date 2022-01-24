var score = 100 /*Variable declaration. Var allows
us to define a variable with global scope whereas
let allows us to define a variable through 
block scope*/


score = 130
const bonus = 50

var finalScore = (score + bonus) * 1.8

var complex = ((4 + 4) * 5) / 2

// console.log(finalScore);
// console.log(complex);

/*Temperature Conversion*/
let tempInFahrenheit = 100

//(T(F) - 32) * 5/9
let celsius = (tempInFahrenheit - 32) * 5/9
console.log("The temperature of " + tempInFahrenheit + 
" in celsius is " + celsius)
