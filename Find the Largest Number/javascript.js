let firstNum = prompt("Enter 1st num: ");
let secondNum = prompt("Enter 2nd num: ");
let thirdNum = prompt("Enter 3rd num: ");

if (firstNum >= secondNum && firstNum >= thirdNum)
    console.log(firstNum + " is the largest number.");
else if (secondNum >= firstNum && secondNum>= thirdNum)
    console.log(secondNum + " is the largest number.");
else if (thirdNum >= firstNum && thirdNum>= secondNum)
    console.log(thirdNum + " is the largest number.");