// const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

// /*let sayHello = function(name) {
//     console.log('Greeting message for user')
    
// }


// days.forEach(sayHello) For each goes through the function
// for the amount of values in the array*/ 
// /*You can also simply paste the function within the parantheses
// */


// days.forEach(function (day, index) { /*parameter name is not important*/
//     console.log(`Starts with ${index+1} -- ${day}`);
    
// })
// /*The first element will always be the first element in the array
// and the index will be the position of that first element*/

// const months =['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

// months.forEach(function (months) {
//     console.log(months);
    
// }) 

// const toDo = ['Study', 'Run', 'JavaScript']
// console.log("To do:");
// toDo.forEach(function (assignments, index) {
//     console.log(`${index+1}.${assignments}`);
// }) 

// /*For loop:*/

// for (let i = 0; i < days.length; i++) {
//     console.log(days[i]);
    
// }

// for (let i = days.length - 1; i >= 0; i--) {
//     console.log(days[i]);
    
// }


//Trello - Todo
const myTodos = []
myTodos.push('Buy Bread')
myTodos.push('Record YT videos')
myTodos.push('Go to gym')

myTodos.forEach(function(todo, i){
    console.log(`Your task no. ${i+1} is: ${todo}`);
    
})

const myTodos2 = []
myTodos2.push('Go to gym')
myTodos2.push('Record YT videos')
myTodos2.push('Buy Bread')

for(let i = 0; i < myTodos2.length; i++)
{
    console.log(`${i+1}. ${myTodos2[i]}`);
    
}

