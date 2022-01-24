/* define variables using let*/

let name = 'John' /*Declare variable with value John*/
/*Note: You do not need to specify the data type
of the variable. The above is a string*/



console.log(name)
/*Javascript is forgiveable with lack of or
inclusion of semicolons*/

let score = '100'
let bonus = '20'

let totalScore = score + bonus

console.log(totalScore) /*Concatenate string.  Numbers should not
be wrapped around in quotes*/

let realScore = 100.0
let realBonus = 20

let realTotal = realScore + realBonus;

console.log(realTotal)

let firstName = "David"
let lastName = "Curren"
let fullName = firstName + "****" + lastName

console.log(firstName + ' ' + lastName)
console.log(fullName)


/*Variable reuse*/

/*Never redeclare your variable*/
firstName = "Alexis"
console.log(firstName + ' ' + lastName)

/*Constants*/
const newName = "George"
/*Cannot change this value of the newName variable. For example:
newName = "Jim" throws an error*/



