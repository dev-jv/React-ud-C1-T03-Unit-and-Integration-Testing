// --------------------------- <> Template String > Bactick/Back Quote

const nombre = 'Harry';
const apellido = 'Potter';

const nS = nombre + ' ' + apellido;
console.log(nS);

const nC = `${nombre} ${apellido}`;
console.log(nC);

const nombreCompleto = `
${nombre} 
${apellido} 
${1+1}`
;
console.log(nombreCompleto);

function getSaludo(ka) {
    return 'Bienvenido ' + ka;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);

console.log(`Este es un texto: ${getSaludo(nC)}`);



