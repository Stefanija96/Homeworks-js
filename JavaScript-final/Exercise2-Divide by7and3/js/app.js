let num = 100;

function divisibleByThreeAndSeven() {
    let arrayDivisible = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 7 == 0) {
            arrayDivisible.push(i);
        }
    }
    console.log(arrayDivisible);
}
divisibleByThreeAndSeven()


// console.log("=====BONUS=====")
// let num = Number.MAX_SAFE_INTEGER
// function divisibleByThreeAndSeven(){
// let arrayDivisible = [];
// for (let i= 1; i <= num; i++){ 
// if(i % 3 == 0 && i% 7 == 0){ 
// arrayDivisible.push(i);
// }
// }
// console.log(arrayDivisible);
// }
// divisibleByThreeAndSeven