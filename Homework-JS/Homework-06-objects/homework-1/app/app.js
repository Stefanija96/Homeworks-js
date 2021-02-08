function Dog(name, kind){
    this.name = name;
    this.kind = kind;
    this.dogSpeak = function(text){
        console.log( `${this.name} says: ${text}`);
    }
}

let animalForm = document.querySelector(`#animal`)
animalForm.addEventListener(`submit`, function(evt){
    evt.preventDefault()
    let name = this.name.value;
    let kind = this.kind.value;
    let animal = new Dog(name, kind);
    animal.dogSpeak(`Hey Bro!!`);
})
