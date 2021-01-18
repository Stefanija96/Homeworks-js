// Exercise 3

let numberOne = prompt("Insert your first number");
let numberTwo = prompt("Insert your second number");
let resultOne = 100 - numberOne;
let resultTwo = 100 - numberTwo;

if( resultOne > resultTwo){
    console.log(`Number ${numberTwo} is closer to 100`);
}
else{
    console.log(`Number ${numberOne} is closer to 100`);
}

if (numberOne < 0){
    console.log(`${numberOne} is negative number!`);
}
else if(numberTwo < 0){
    console.log(`${numberTwo} is negative number!`);
}