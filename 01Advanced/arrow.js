/*const sayHello = function(){
    return "Hello"
}*/

/*Arrow function*/
const sayHello = (name) => `Hello, ${name}`
//console.log(sayHello('Jimmy'));

const todos = [{
    title: 'Buy Bread',
    isDone: true,
    }, {
     title: 'Go To Gym',
     isDone: true,   
    }, {
     title: 'Record YT Videos',
     isDone: false,
    }]

const thingsDone = todos.filter((todo) => todo.isDone === true)

//console.log(thingsDone);

const newTodos = [{
    title: 'Sleep',
    isDone: true,
    }, {
     title: 'Game',
     isDone: false,   
    }, {
     title: 'Code',
     isDone: true,
    }, {
     title: 'Watch YT',
     isDone: false
    },{
     title: 'Run',
     isDone: true
    },{
     title: 'Ski',
     isDone: false
    }]
    const thingsNotDone = newTodos.filter((todo) => todo.isDone == false)
    thingsNotDone.forEach(todo => console.log(todo.title))

    /*Do not use arrow functions in methods and constructors*/
    const cameras = {
        price: 600,
        weight: 2000,
        myDes: () => {
            return `This Canon camera is of $${this.price}`
        }

    }
    //console.log(cameras.myDes());

    
    
    
    
    

