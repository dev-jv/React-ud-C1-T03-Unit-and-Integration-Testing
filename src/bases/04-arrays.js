// ------------------------------------ <> Arrays

// -------------------------------- 100 elements
// const ary = new Array(100);
// console.log(ary);

// -------------------- Push ..modifies the main object
// const ary = [];
// ary.push(1)
// ary.push(2)
// ary.push(3)
// ary.push(4)

// ----------------------------- is better!
// const ary = [1, 2, 3, 4];
// console.log(ary);

// --------------------------- Assigning...
const ary = [1, 2, 3, 4];
console.log(ary);

let ary2 = ary;
ary2.push(5);

console.log(ary);
console.log(ary2);

// --------------------------- Spread Operator
const ary3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(ary3);

const ary4 = [...ary3, 10];

console.log(ary3);
console.log(ary4);

// ---------------------- Map
const ary5 = ary4.map( function(x) {
    return x*2;
});

console.log(ary4);
console.log(ary5);
