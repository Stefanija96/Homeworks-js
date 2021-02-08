function Book(title, author, readingStatus) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.read = function () {
        if (this.readingStatus) {
            console.log(`You have read ${title} from ${author}, but you should read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.`)
        } else {
            console.log(`It's a great book, try reading it.`)
        }
    }
}

let bookForm = document.querySelector(`#book`)
bookForm.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    evt.target.reset;
    let title = evt.target.title.value;
    let author = evt.target.author.value;
    let readingStatus = evt.target.readingStatus.checked;
    let yesno = new Book(title, author, readingStatus)
    yesno.read();
})