let numArray = [12, 25, 3, 62, 8];

function sumNumArray(){
    sum = numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4];
    console.log(`The sum is ${sum}`)
    return sum;
}

sumNumArray()

console.log("-------------------BONUS--------------------")

function validateNumber(num){
    if ( isNaN(num)){
        console.log('Input is not a number')
    } else{
        console.log('The input is number')
    }
}

validateNumber()
validateNumber('Array')
validateNumber(88)
validateNumber("JavaScript")
validateNumber(numArray[4])