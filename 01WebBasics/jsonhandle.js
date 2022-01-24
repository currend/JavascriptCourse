const student = {
    name: 'John',
    age: 23,
    isActive: true

}

//convert object to a string to be stored in local storage
const studentObjToStr = JSON.stringify(student)
console.log(typeof studentObjToStr)
//localStorage.setItem('student', studentObjToStr)
const toJSONStudent = JSON.parse(studentObjToStr)
console.log(toJSONStudent.age);

