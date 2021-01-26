evenNums = "";

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        evenNums = evenNums + i + " ";
    } else {
        evenNums = evenNums + i + `\n`;
    }
}

console.log(evenNums);