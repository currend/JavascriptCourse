let myTodos = { //object
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(num){ //method.  In Javascript, we call a function inside an object a method.
        this.meetings += num 
    },
    meetingsDone: function(num){
        this.meetDone += num
    },
    summary : function(){
        console.log('You have ' + this.meetings + ' meetings today...');
        console.log(`You have completed ${this.meetDone} meetings today!`);
    },
    resetDay: function()
    {
        this.meetings = 0
        this.meetDone = 0
    }

}

let myTodosTwo = { //object
    day: 'Tuesday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function(){ //method.  In Javascript, we call a function inside an object a method.
        console.log(this);
        
        
    }
}

myTodos.addMeeting(4)
myTodos.summary()
myTodos.meetingsDone(2)
myTodos.summary()
myTodos.resetDay()
console.log(myTodos.meetings);
console.log(myTodos.meetDone);



//myTodosTwo.addMeeting()

//Assignment
//Handle meeting done
//Create a function that can reset entire day


