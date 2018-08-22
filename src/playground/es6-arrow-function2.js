// arguments object - no longer bound with arrow functions

// const add = function(a, b){
//     console.log(arguments);
//     return a+b;
// };

const add = (a, b) => {
    // console.log(arguments);
    return a+b;
};

console.log(add(10, 20));

// this keyword - no longer bound

// const user = {
//     name: 'Juhi',
//     cities: ['Philidalphia', 'New York', 'Mexico'],

    // printPlacesLived: function (){
    //     // const that = this;
    //     // // console.log(this.name);
    //     // // console.log(this.cities);

    //     // this.cities.forEach(function(city){
    //     //     console.log(that.name + ' has lived in ' + city)
    //     // });

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city)
    //     });
    // }

    // printPlacesLived(){
    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city)
    //     });
    // }
// };
// user.printPlacesLived();

const user = {
    name: 'Juhi',
    cities: ['Philidalphia', 'New York', 'Mexico'],
    printPlacesLived(){
        return this.cities.map((city) => 
            this.name + ' has travelled to ' + city );
    }
};
console.log(user.printPlacesLived());

//Challenge Area

const multiplier = {
    numbers: [1, 2],
    multiplyBy: 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());