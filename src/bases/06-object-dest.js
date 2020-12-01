// --------------------------------------------------- Object Destructuring

// const persona = {
    // nombre: 'Nick',
    // edad: 30,
    // clave: 'Grimm',
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// ---------------------------------------------------  
// const persona = {
//     nombre: 'Nick',
//     edad: 30,
//     clave: 'Grimm',
// };

// const {edad, nombre, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// --------------------------------------------------- 
// const persona = {
//     nombre: 'Nick',
//     edad: 30,
//     clave: 'Grimm',
// };

// const retornaPersona = ( usuario ) => {
//     console.log(usuario);
// }

// retornaPersona( persona );

// --------------------------------------------------- 
// const persona = {
//     nombre: 'Nick',
//     edad: 30,
//     clave: 'Grimm',
// };

// const retornaPersona = ( {nombre, clave} ) => {
//     console.log(nombre, clave);
// }

// retornaPersona( persona );

// --------------------------------------------------- 
// const persona = {
//     nombre: 'Nick',
//     edad: 30,
//     clave: 'Grimm',
//     estado: 'Activo', 

// };

// const retornaPersona = ( {nombre, clave, estado ='Inactivo'} ) => {
//     console.log(nombre, clave, estado);
// }

// retornaPersona( persona );

// --------------------------------------------------- 
// const persona = {
//     nombre: 'Nick',
//     edad: 30,
//     clave: 'Grimm',
//     // estado: 'Activo', 

// };

// const usContext = ( {nombre, clave, edad, estado ='Inactivo'} ) => {
//     // console.log(nombre, clave, estado);
//     return {
//         nombreClave: clave,
//         anios: edad,
//     }
// }

// const {nombreClave, anios} = usContext( persona );
// // const {nombreClave, anios} = hunter;
// console.log(nombreClave, anios);

// --------------------------------------------------- 
// const persona = {
//     nombre: 'Nick',
//     edad: 30,
//     clave: 'Grimm',
//     // estado: 'Activo', 

// };

// const usContext = ( {nombre, clave, edad, estado ='Inactivo'} ) => {
//     // console.log(nombre, clave, estado);
//     return { 
//         nombreClave: clave, 
//         anios: edad, 
//         estad:estado, 
//         latlng: { 
//             lat: 14.1232, 
//             lng: -12.32 
//         } 
//     } 
// } 

// const {estad, nombreClave, anios, latlng} = usContext( persona );
// // const {nombreClave, anios} = hunter;
// console.log(nombreClave, anios, estad);
// console.log(latlng);


// --------------------------------------------------- 
const persona = {
    nombre: 'Nick',
    edad: 30,
    clave: 'Grimm',
    // estado: 'Activo', 

};

const usContext = ( {nombre, clave, edad, estado ='Inactivo'} ) => {
    // console.log(nombre, clave, estado);
    return { 
        nombreClave: clave, 
        anios: edad, 
        estad:estado, 
        latlng: { 
            lat: 14.1232, 
            lng: -12.32 
        } 
    } 
} 

const {estad, nombreClave, anios, latlng:{lat, lng}} = usContext( persona );
// const {nombreClave, anios} = hunter;
console.log(nombreClave, anios, estad);
console.log(lat, lng);



