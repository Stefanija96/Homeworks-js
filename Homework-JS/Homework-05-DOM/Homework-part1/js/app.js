let headerOne = document.getElementById('myTitle');
headerOne.innerHTML = "This is very interesting page!"

let paragraphOne = document.querySelector(`.paragraph`);
paragraphOne.innerHTML = `The first paragpraph is changed`;

let paragraphTwo = document.querySelector(`.second`);
paragraphTwo.innerHTML = `New text in this paragraph`;


let divS = document.getElementsByTagName("div")[2];
let secondHeader = divS.firstElementChild;
secondHeader.innerHTML = "This Heading is changed";

let thirdHeader = secondHeader.nextElementSibling;
thirdHeader.innerHTML = "Finally, the third Header is changed"