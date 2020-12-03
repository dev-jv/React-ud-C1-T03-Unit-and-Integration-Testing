// ----------------------------- <> Functions

// ----------------------- 
// function saludar(x) {
//     return `Hola ${x}`;
// }
// saludar = 30;
// // console.log(saludar('Sam'));
// console.log(saludar);

// ------
// const saludar = function(x) {
//     return `Hola ${x}`;
// }
// console.log(saludar('Sam'));

// ------
// const saludar2 = (x) => `Hola ${x}`;
// console.log(saludar2('Dean'));

// ------
export const getUser = () => ({ // ({..})
    uid: 'Drak01',
    password: 'Godzi01'
});

// const user = getUser();
// console.log(user);

// ------ 
export const getUsuarioActivo = nombre => ({
        uid: 'ABC567',
        username: nombre,
});

// const usuarioActivo = getUsuarioActivo('Castiel');
// console.log(usuarioActivo);



