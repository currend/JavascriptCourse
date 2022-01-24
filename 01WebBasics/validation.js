function myValidation(){
    let valFromForm = document.getElementById("myform").value
    if (isNaN(valFromForm) || valFromForm < 1 || valFromForm > 20) {
        console.log("Not good");
        const element = document.querySelector('#idone')
        element.textContent = "You're kidding, right Lassy?"
        
    } else {
        console.log("Good!");
        const element = document.querySelector('#idone')
        element.textContent = "Yay! You did Lassy!"
        
    }
}

//form validation

document.querySelector('.myform').addEventListener('submit', (event) => {
    event.preventDefault()
    if(event.target.password.value === event.target.repeatPass.value)
    {
        console.log("Good, they match!")
        
    }
    else {
        console.log("Try again");
        
    }
    event.target.username.value = ''
    event.target.email.value = ''
    event.target.password.value = ''
    event.target.repeatPass.value = ''
})