/*Define functions*/
let sayHello = function(name) {
    console.log(`Greeting message for ${name}:`);
    console.log(`Hey ${name}`);
    
}

sayHello('John')


let fullNameMaker = function(firstName, lastName) {
    console.log('Welcome to LCO');
    console.log(`Happy to have you, ${firstName} ${lastName}`);
    
}

fullNameMaker("Elizabeth",  "Sparrow")

let myAdder = function(num1, num2) {
    let added = num1 + num2
    return added
}

//let result = myAdder(3, 5)
//console.log(result)

let myMult = function(num1, num2) {
    return num1 * num2
}
console.log(myMult(5,6))

let guestUser = function(name = 'unName', courseCount = 0)
 { /*Default parameters are present, where if nothing was
    provided, then we will use those*/
    return 'Hello ' + name + ' and your course count is '
    + courseCount;
}

console.log(guestUser()); /*Since the parameter is not
provided, it is not defined. This is different from
setting a value to null. Undefined is a bad approach
and is considered as a case not handled. This will not
occur if default params are used as above*/

console.log(guestUser('Elizabeth', 2));