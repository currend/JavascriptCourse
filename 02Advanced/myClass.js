class User {
    constructor(firstName, middleName, lastName, credits) {
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
        this.credits = credits
    }
    getFullName(){
        
        return`${this.firstName} ${this.middleName} ${this.lastName} is my full name` 
        
        
    }
    editName(newName) 
    {
       
            const name = newName.split(' ')
            this.firstName = name[0]
            this.middleName = name[1]
            this.lastName = name[2]
        
       
       
    }
    

}

class Teacher extends User {
    constructor(firstName, middleName, lastName, credit, subject) {
        super(firstName, middleName, lastName, credit) //uses constructor from superclass user
        this.subject = subject
    }
    getFullName(){
        
        return`${this.firstName} ${this.middleName} ${this.lastName} is my full name and I teach ${this.subject}` 
        
        
    }
}

const john = new User('John', 'Clark', 'Anderson', 60)
console.log(john);
console.log(john.getFullName());
john.editName('Johnny Clark Anderson')
console.log(john.getFullName());
const lizzie = new Teacher('Lizzie', 'Margaret', 'Sparrow', 60, 'English')
console.log(lizzie.getFullName());



