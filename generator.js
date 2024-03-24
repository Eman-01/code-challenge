// accepts input of student's marks and returns the grade
function generateGrade (studentMarks){
    if (studentMarks > 79){
        return "A"
    }else if(studentMarks >= 60){
        return "B"
    }else if(studentMarks >= 49){
        return "C"
    }else if(studentMarks >= 40){
        return "D"
    }else{
        return "E"
    }
}
generateGrade()

