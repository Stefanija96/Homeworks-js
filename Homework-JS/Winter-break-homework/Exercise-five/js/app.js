// Exercise 5

let number1 = parseInt(prompt("Insert the first number"));
let number2 = parseInt(prompt("Insert the second number"));
let result;

if (number1 >= 20 && number1 <= 30 && number2 >= 20 && number2 <= 30) {
    result = number1 + number2;
    console.log(`The sum is ${result}`);
} else if (number1 >= 40 && number1 <= 60 && number2 >= 40 && number2 <= 60) {
    result = number1 - number2;
    console.log(`The difference is ${result}`);
} else if (number1 >= 80 && number1 <= 100 && number2 >= 80 && number2 <= 100) {
    result = number1 * number2;
    console.log(`The product is ${result}`);
}
else {
    console.log(`Please enter valid number!`);
}