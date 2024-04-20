Exporting module ::-
/// default exports :-

const add = (a,b)=>{
    return a+b;
};
export default add;

// We can have multiple named exports per module.
/// named exports :-

export const add = (a, b)=>{
    return a+b;
}
export const sub = (a, b)=>{
    return a-b;
}
export const mul = (a, b)=>{
    return a*b;
}

