// Exercise 4

let someNumber = prompt(`Insert a number`)
let difference;

if (someNumber < 13){
    difference = 13 / someNumber;
    console.log (`The difference is ${difference}`)
}
else{
    difference = (13 / someNumber) * 2;
    console.log(`The difference is ${difference}`)
}
