// ------------------------------------------- <> Import, Export ...

import heroes, { owners } from '../data/heroes';

// const [ , , , k, ,] = heroes;

// console.log( k );

// console.log( k.name );

// ------------------------------------------
// const getById = (id) => {
//     return heroes.find( ( hero ) => {
//         return true; // returns the index element id ..
//     });
// };

// console.log( getById(2) );

// ------------------------------------------
// const getHeroById = (id) => {
//     return heroes.find( ( hero ) => {
//         if ( hero.id === id){
//             return true;
//         } else {
//             return false;
//         }
//     });
// };

// console.log( getHeroById(2) );

// ------------------------------------------
// const getHeroeById = (id) => {
//     return heroes.find(hero => hero.id === id); // Being an equality it evaluates as true/false
// };

// console.log( getHeroeById(2) );

// ------------------------------------------
const getByIdH = id => heroes.find(hero => hero.id === id);

// console.log( getByIdH(3) );

// ------------------------------------------
const getByOwnDC = owner => heroes.filter(hero => hero.owner === owner);

// console.log( getByOwnDC('DC') );

// ------------------------------------------
const getByOwnM = x => heroes.filter(e => e.owner === x); // according to x.. our owner

// console.log( getByOwnM('Marvel') );

// ------------------------------------------
// console.log(owners);

export {
    getByIdH,
    getByOwnM,
    getByOwnDC
}
