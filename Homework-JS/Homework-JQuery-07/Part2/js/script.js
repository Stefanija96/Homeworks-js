let inputMessage = $("#message");
let txtColor = $("#txtcolor");
let btn = $("button");
let h1 = $("h1");

function isColor(strColor) {
    let textColor = new Option().style;
    textColor.color = strColor;
    return textColor.color == strColor;
}

btn.on('click', function () {

    if (inputMessage.val() === "" && txtColor.val() === "") {
        h1.html(`Please enter valid input!`);
    } else if (isColor(txtColor.val())) {
        h1.html(`${inputMessage.val()}`);
        h1.css('color', `${txtColor.val()}`);
    } else {
        h1.html(`${txtColor.val()} - This isn't a color!`);
    }

    inputMessage.val("");
    txtColor.val("");

});