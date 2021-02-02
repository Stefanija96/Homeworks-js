let namesArray = ["Bill", "Ana", "Josephine", "Elena", "Stefanija"];
let namesLengthArray = [];

function mapToArrayElementsLength(arr) {
    for (let i = 0; i < arr.length; i++) {
        let countLetters = arr[i].length;
        namesLengthArray.push(countLetters);
    }
}
mapToArrayElementsLength(namesArray);
console.log(namesLengthArray);