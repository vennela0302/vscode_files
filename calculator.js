// default exports :-
// exporting module :-

// const add = (a,b)=>{
//     return a+b;
// };
// module.exports = add;


// We can have multiple named exports per module.
// named exports :-
// exporting module :-

const add = (a, b)=>{
    return a+b;
}
const sub = (a, b)=>{
    return a-b;
}
const mul = (a, b)=>{
    return a*b;
}
exports.add = add;
exports.sub = sub;
exports.mul = mul;

