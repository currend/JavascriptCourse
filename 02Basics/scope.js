//Scope
let iamGlobal = 'someValue'
if(true) {
    let iamLocal = 'someMoreValue'
    iamGlobal = 'Superman' //Value changed and will
    //be affected outside of block.
    console.log(iamGlobal);
    console.log(iamLocal);
    //This is a block of code (inside the {})
}
//iamLocal cannot be accessible outside of the if.
console.log(iamGlobal);
//If you declare iamLocal with var instead of let, 
//then it will print. var is used only for completely
//global variables and it is not a good approach.


//King's territory problem

//let king = 'John'

if(true) {
    //let king = 'Sam'

    if(true) {
        king = 'Ram'
        console.log("King is: " + king)
        //Since king is not defined in this scope,
        //it will move one level up
        /*If you do not use let, then it allows
        you to access the variable value change 
        outside of the block (global), which is dangerous*/
    }
}

// if(true) {
//     console.log("I am second part: " + king)
// }
