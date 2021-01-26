function fullName(firstName, lastName){
    for(let i=0; i<firstName.length && i<lastName.length; i++){
        let numericValue = i + 1
        console.log(`${numericValue}. ${firstName[i]} ${lastName[i]}`)
    }
}
fullName(["Mary", "Liz", "John", "Jane", "John"],
 ["Smith", "Hoover", "Doe", "Doe", "Smith"])