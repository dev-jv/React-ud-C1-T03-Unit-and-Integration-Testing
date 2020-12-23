// ------------------------------------------- <> Import, Export ...

import heroes, { owners } from '../data/heroes'

// const [ , , , k, ,] = heroes; 

// console.log( k );

// console.log( k.name );

// // ------------------------------------------ 
// const getById = (id) => {
//     return heroes.find( ( heroe ) => {
//         return true; // devuelve el elemento de indice id..
//     });
// };

// console.log( getById(2) );

// // ------------------------------------------ 
// const getHeroById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if ( heroe.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

// console.log( getHeroById(2) );

// // ------------------------------------------ 
// const getHeroeById = (id) => {
//     return heroes.find(heroe => heroe.id === id); // Al ser una igualdad la evalua como true/false
// }

// console.log( getHeroeById(2) );

// ------------------------------------------ 
const getByIdH = id => heroes.find(heroe => heroe.id === id);

// console.log( getByIdH(3) );

// ------------------------------------------ 
const getByOwnDC = owner => heroes.filter(heroe => heroe.owner === owner);

// console.log( getByOwnDC('DC') );

// ------------------------------------------ 
const getByOwnM = x => heroes.filter(e => e.owner === x); // según x...nuestro owner

// console.log( getByOwnM('Marvel') );

// // ------------------------------------------ 
// console.log(owners);

export {
    getByIdH,
    getByOwnM,
    getByOwnDC
}



