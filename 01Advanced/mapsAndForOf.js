var john = {
    name: "I am John",
    age: 24,
    isActive: true
    
}

var mary = {
    name: "I am mary",
    age: 23,
    isActive: true
}

var sam = {
    name: "I am sam",
    age: 29,
    isActive: false
}

let users = new Map()
users.set('john', john)
users.set('mary', mary)
users.set('sam', sam)

console.log(users);

//map always return an iterable.

console.log(users.get('john'));

console.log(users.keys());
console.log(users.values());

for (const key of users.keys()) {
    console.log(key);
    
}

for (const val of users.values()) {
    console.log(val.age);
    
}

for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name);
    
    
}


/*For each does value, key*/
users.forEach((value, key) => console.log(key + ' = ' + value.name));

/*Arrays*/
var arrOfArr = [['one', '1'], ['two', '2'], ['three', '3']]
var newMap = new Map(arrOfArr)

for (const [key, value] of newMap.entries()) {
    console.log(key + " = " + value);
    
}

