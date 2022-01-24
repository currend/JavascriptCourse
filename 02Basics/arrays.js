const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

// numbers[1] = 'Changed Value'

// console.log(numbers)

//Operations
//Start of the array--Number shift
// console.log(numbers.shift())

// console.log(numbers);
//Shifts starting value over 1, so the first value is gone (shifted)

// numbers.unshift('Something new')
// console.log(numbers); /*Inserting one more value at the start.*/




//End of array
// console.log("The element to be deleted is " + numbers.pop()) //Removes last element from array
// console.log(numbers);

// numbers.push("New Element: Seven") /*Adds this to the end of array*/
// console.log(numbers);




//Middle or choice of location
numbers.splice(2, 2, "Something") /*Start delete from position 2, delete one element and put a new value*/
console.log(numbers);
/*If there is no value specified for other values
to be deleted, then it will not be replaced*/
