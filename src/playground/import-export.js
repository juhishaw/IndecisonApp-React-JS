//Import Statement
// import './utils.js';

import subtract, {square, add} from './utils.js';

console.log('app.js is running...');
console.log(square(4));
console.log(add(4, 4));
console.log(subtract(4, 2));

import isSenior, {isAdult, canDrink} from './person.js';

console.log(isAdult(21));
console.log(canDrink(16));
console.log(isSenior(65));