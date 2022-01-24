console.log('5' - 5); //Javascript tries to be smart and predicts the result
//This is because it assumes you meant integers.
console.log('5' + 5); //Now Javascript, treats everything as a string.
const giveType = typeof {}
console.log(giveType);

const adder = true + 5
console.log(adder); //produces 6 since true = 1

const loginDetails = []

const loginID = loginDetails[0]

if(loginID) {
    console.log("Allow user to login");
}
else{
    console.log('Auth failed');
    
}
//values that interpreted as false: false, zero, '', (if anything in string, then true), null, undefined
    




