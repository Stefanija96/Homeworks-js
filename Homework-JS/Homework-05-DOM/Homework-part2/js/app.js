 let numbers = [5, 10, 15, 20, 25, 30];

 let paragraph1 = document.getElementById('paragraph');

 function printArr(arr) {
     for (i = 0; i <= arr.length - 1; i++) {
         paragraph1.innerHTML += `<li>${numbers[i]}</li>`
     }
 }

 function sum(array) {
     let total = 0;
     for (let i = 0; i < array.length; i++) {
         total += array[i];
     }
     return total;
 }

 printArr(numbers);
 paragraph1.innerHTML += `<li>The sum for the numbers above is:${sum(numbers)}</li>`;