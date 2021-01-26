let sentence = ['Hello', 'there', 'students', 'of', 'SEDC', '!'];

function wholeSentence(array) {
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i] == "!" && "?" && ".") {
            result = result + array[i];
        } else {
            result = result + " " + array[i];
        }
    }
    return result;
}

console.log(wholeSentence(sentence));