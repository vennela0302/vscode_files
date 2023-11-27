// const greetings = (name) =>{
//     console.log(`hello ${name}`);
// };
// greetings('abhi');
// greetings('mani');

// default exports :-
// importing module :-

// import add from './calculator.mjs';
// console.log(add(5,2));


// named exports :-
// importing module :-

import {add, sub, mul} from './calculator.mjs';
console.log(add(5,2));
console.log(sub(5,2));
console.log(mul(5,2));