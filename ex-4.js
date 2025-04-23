// Start coding here
const add = (a,b)=>{ return a+b;};
const subtract = (a,b)=>{ return a-b;};
const multiply =(a,b)=>{return a*b;};
const divide =(a,b)=>{return a/b;};

let calculator = {
    add : add,
    subtract : subtract,
    multiply : multiply,
    divide : divide
};

console.log(calculator.add(10,5));
console.log(calculator.subtract(10,5));
console.log(calculator.multiply(10,5));
console.log(calculator.divide(10,5));

const addResult = calculator.add(10,20);
console.log(addResult);

const divideResult = calculator.divide(3000,10);
console.log(divideResult);
