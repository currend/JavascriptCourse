const myTodos = ['Buy Bread', 'Go To Gym', ' Record YT Videos']

//console.log(myTodos.indexOf('Buy Bread')); /*If not found, you'll get -1*/

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
    }, {
     title: 'Go To Gym',
     isDone: false,   
    }, {
     title: 'Record YT Videos',
     isDone: true,
    }]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);
    
//     return todo.title === 'Go To Gym'
// })

// console.log(index);


// const findTodo = function(todos, title){
//     const index = todos.findIndex(function(todo, index){
//         return todo.title.toLowerCase() == title.toLowerCase()
//     }) /*loops through every todo*/
//     return todos[index]
// }

const findTodo = function(todos, title){
    const titleRet = todos.find(function(todo, index){
        return todo.title.toLowerCase() = title.toLowerCase()
    })
    return titleRet
    
}

let val = findTodo(newTodos, 'Go to gym')
console.log(val);


