function getGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60 && marks <= 79) {
        return "B";
    } else if (marks >= 49 && marks <= 59) {
        return "C";
    } else if (marks >= 40 && marks <= 49) {
        return "D";
    } else if (marks >= 0 && marks < 40) {
        return "E";
    } else {
        return "Invalid marks. Please enter a number between 0 and 100.";
    }
}

let marks = prompt("Enter the student's marks (0-100): ");
marks = Number(marks);
let grade = getGrade(marks);
alert("The student's grade is: " + grade);

