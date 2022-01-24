document.title = "Well hello there, lassy" //Update title
//console.log(document.getElementById('idone')); There is a better option:
//const myElement = document.querySelector('p') /*Selects first one*/
//console.log(myElement);
//const myElement = document.querySelectorAll('p') 
//console.log(myElement[0]);
//const myElement = document.querySelectorAll('#idone') 
//console.log(myElement);

//const myPElements = document.querySelector('p')
//myPElements.textContent = 'well hello there.'

//const myPElements = document.querySelectorAll('p')
//myPElements.forEach((para) => para.textContent = "Changed!")

const addNewPara = document.createElement('p')
addNewPara.textContent = "Added with JS" //Not in HTML
//Now to add it there:
document.querySelector('body').appendChild(addNewPara) //Add to the end.
//Since this comes after paragraphs are changed, this will not be.

//Buttons:
document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = "Nice!"
    
})

//Track input form
document.querySelector('#myform').addEventListener('input', (event) => {
    console.log(event.target.value);
    
})





