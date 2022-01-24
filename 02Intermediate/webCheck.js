 let userEmail = 'abc1234'
 let password = '1234'

 //console.log(password.length); //length is a property, not a method, so no parens
 //console.log(userEmail.toLowerCase());
 //console.log(userEmail.trim());

 let userChecker = function(myString){
     if((myString.includes(123)) && (myString.length > 6)) {
         return true
     }
     return false
 }
 console.log(userChecker(userEmail));

 let passChecker = function(password){
    if((password.includes(1234)) && (password.length > 8)) {
        return true
    }
    return false
 }
 
 
 

 