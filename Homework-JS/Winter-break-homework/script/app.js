// // Exercise 1
// let firstNumber = 100;
// let unDefined;
// let type = false;
// let nullType = null;
// let myName = "Stefanija";

// console.log(firstNumber);
// console.log(unDefined);
// console.log(type);
// console.log(nullType);
// console.log(myName);

// console.log("-------------------------------------------------------");

// console.log(typeof firstNumber);
// console.log(typeof unDefined);
// console.log(typeof type);
// console.log(typeof nullType);
// console.log(typeof myName);

// console.log("-------------------------------------------------------");

// // Exercise 2
// let aNum = 3.4;
// let bNum = -14;
// let cNum = 23;

// console.log(aNum+bNum+cNum);
// console.log(aNum-bNum-cNum);
// console.log(aNum*bNum*cNum);
// console.log(aNum/bNum/cNum);
// console.log(aNum%bNum%cNum);

// console.log("-------------------------------------------------------");

// // Exercise 3

// let numberOne = prompt("Insert your first number");
// let numberTwo = prompt("Insert your second number");
// let resultOne = 100 - numberOne;
// let resultTwo = 100 - numberTwo;

// if( resultOne > resultTwo){
//     console.log(`Number ${numberTwo} is closer to 100`);
// }
// else{
//     console.log(`Number ${numberOne} is closer to 100`);
// }

// if (numberOne < 0){
//     console.log(`${numberOne} is negative number!`);
// }
// else if(numberTwo < 0){
//     console.log(`${numberTwo} is negative number!`);
// }

// console.log("-------------------------------------------------------");

// // Exercise 4

// let someNumber = prompt(`Insert a number`)
// let difference;

// if (someNumber < 13){
//     difference = 13 / someNumber;
//     console.log (`The difference is ${difference}`)
// }
// else{
//     difference = (13 / someNumber) * 2;
//     console.log(`The difference is ${difference}`)
// }

// console.log("-------------------------------------------------------");

// Exercise 5


let number1 = prompt("Insert the first number");
let number2 = prompt("Insert the second number");
let result;


if(number1 >= 40 && number1 <= 60 && number2 >= 40 && number2 <= 60){
    result = number1 + number2;
    console.log(`The sum is  ${result}`);
} else if(number1 >= 20 && number1 <= 30 && number2 >= 20 && number2 <= 30){
    result = number1 - number2;
    console.log(`The difference is ${result}`);
} else if(number1 >= 80 && number1 <= 100 && number2 >= 80 && number2 <= 100){
    result = number1 * number2;
    console.log(`The product is ${result}`);
}
else{
    console.log(`Please enter valid number!`);
}


// console.log("-------------------------------------------------------");

// // Exercise 6

// let grade1 = 10;
// let grade2 = 6;
// let grade3 = 8;
// let grade4 = 9;
// let grade5 = 6;

// let averageGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

// if(averageGrade <= 8){
//     console.log(`You didn't pass the semester. Your grade is ${averageGrade}`);
// }
