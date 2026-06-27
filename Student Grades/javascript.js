let grades = [20,30,40,50,60,70,80,90];
let passingGrade = Number(prompt("Enter the passing the grade: "));

let passedGrade = grades.filter(grade => grade >= passingGrade);
console.log("Passing Grades: " + passedGrade);