let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0
}

let addMeeting = function(todo, meet = 0){ //default parameter for meet in case nothing is passed
    todo.meetings += meet

}
 
//a copy of object is not being passed, you are passing the object. 

let meetDone = function(todo, meet = 0) {
    
        todo.meetDone += meet
    
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function(todo){
    let meetingsLeft = todo.meetings - todo.meetDone 
    return `You have ${meetingsLeft} meeting(s) today!`
}

addMeeting(myTodos, 4)
addMeeting(myTodos, 2)

meetDone(myTodos, 5)


console.log(myTodos);

console.log(getSummaryOfDay(myTodos));

