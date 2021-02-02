let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let phoneNum = document.getElementById("phone");
let btn = document.getElementById("saveBtn");
let tBody = document.getElementById("tbody");

function Contact(fName, lName, phoneNum) {
    this.fName = fName;
    this.lName = lName;
    this.phoneNum = phoneNum;
}

let newContact = new Contact(fName, lName, phoneNum);
let newContacts = [];;

function addNewContact() {
    newContacts.push(newContact)
};

function displayContacts() {
    tBody.innerHTML +=
        `<tr>
    <td>${newContact.fName.value}</td>
    <td>${newContact.lName.value}</td>
    <td>${newContact.phoneNum.value}</td>
    </tr>`
}
btn.addEventListener('click', function (event) {
    event.preventDefault();
    addNewContact();
    displayContacts();
});