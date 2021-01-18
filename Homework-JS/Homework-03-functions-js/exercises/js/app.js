function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 1.8 + 32);
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (5/9) * (fahrenheit - 32);
    return celsius;
}

let converter = prompt(`Please enter Fahrenheit or Celsius`);
let input = parseInt(prompt(`Please enter your value:`));
if (converter === `Fahrenheit`){
    console.log(`${fahrenheitToCelsius (input)}C`);
}else if(converter === `Celsius`){
    console.log(`${celsiusToFahrenheit (input)}F`);
} else{
    console.log(`Enter correct values!`)
}


console.log(`---------------------------------`)

//AGE CALCULATOR
function calculateAge(birthYear, currentYear){
    let myAge = currentYear - birthYear;
    console.log(`You are ${myAge} years old.`);
}
calculateAge(1997, new Date().getFullYear());
calculateAge(1945, new Date().getFullYear());
calculateAge(1988, new Date().getFullYear());