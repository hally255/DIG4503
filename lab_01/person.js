class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    speak() {
        console.log(this.favoriteColor);
    }
}

module.exports = Person;