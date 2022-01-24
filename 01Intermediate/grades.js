let gradePercentage = function(currentMarks, totalMarks){
    let percent = (currentMarks/totalMarks) * 100
    return percent
}

let findGradeLetter = function(gradePercent) {
    if(gradePercent >= 90) {
        console.log("You got an A");
        
    }
    else if(gradePercent < 90 && gradePercent >= 80)
    {
        console.log("You got a B");

        
    }
    else if(gradePercent < 80 && gradePercent >= 70)
    {
        console.log("You got a C");
        
    }
    else if(gradePercent < 70 && gradePercent >= 60)
    {
        console.log("You got a D");
        
    }
    else{
        console.log("You got a F");
        
    }
}

let grade = 98;
let total = 100;
let myPercent = gradePercentage(grade, total)
findGradeLetter(myPercent)