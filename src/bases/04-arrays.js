// ------------------------------------ <> Arrays

// -------------------------------- 100 elementos
// const arreglo = new Array(100); 
// console.log(arreglo);

// -------------------- Push ..modifica el objeto principal
// const arreglo = [];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

// ----------------------------- Es mejor!
// const arreglo = [1, 2, 3, 4];
// console.log(arreglo);

// --------------------------- Asignando...
const arreglo = [1, 2, 3, 4];
console.log(arreglo);

let arreglo2 = arreglo;
arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);

// --------------------------- Spread Operator
const arreglo3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arreglo3);

const arreglo4 = [...arreglo3, 10];

console.log(arreglo3);
console.log(arreglo4);

// ---------------------- Map

const arreglo5 = arreglo4.map( function(x) {
    return x*2;
});

console.log(arreglo4);
console.log(arreglo5);



