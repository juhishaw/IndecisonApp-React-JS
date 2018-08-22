class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        //return 'Hi, I am ' + this.name;
        return `Hi and this is template string! ${this.name}`;
    }
    getDescription(){
       return `${this.name} is ${this.age} years old`;
    }
}


class Students extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` There major is ${this.major}`;
        }
        else {
            description += ` There is no major!`; 
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hashomeLocation(){
        return !!this.homeLocation;
    }
    getGretting() {
        let grettings = super.getGretting();

        if(this.hashomeLocation()){
            grettings += `${this.name} is ${this.age} year(s) old and is
            born and brought up at ${this.homeLocation}`;
        }

        return grettings;
    }
}

// const me = new Person('Andrew Mead', 26);
// console.log(me.getGretting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGretting());
// console.log(other.getDescription());

// const me = new Students('Andrew Mead', 26, 'Computer Science');
// console.log(me);
// console.log(me.getDescription());

// const other = new Students();
// console.log(other);
// console.log(other.getDescription());

const me = new Traveler('Andrew Mead', 26, 'New York');
console.log(me);
console.log(me.getGretting());

const other = new Traveler();
console.log(other);
console.log(other.getGretting());