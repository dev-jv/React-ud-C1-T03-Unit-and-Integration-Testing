import heroes from '../../src/data/heroes';

const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};

// <> -------------------------------------------------- Promise .then
// const xPromise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve();
//     }, 2000)
// });
//
// xPromise.then( () => {
//     console.log('Then by promise');
// });

// <> -------------------------------------------------- Promise .catch
// const xPromise = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // console.log('2 seconds after);
//         const hero = getHeroById(2);
//         console.log(hero);
//         resolve(hero)
//         reject('Not found');
//     }, 2000)
// });
//
// xPromise.then( (res) => {
//     console.log(`Our hero is ${res.name}`);
// }).catch(err => console.error(err));

// <> ----------------------------------------------------- Promise ...Forms

// <> (Form 1)
//  const getHeroByIdAsync = (x) => {
//     const xPromise = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             // console.log('2 seconds after');
//             const hero = getHeroById(x);
//             // console.log(hero);
//             // resolve(hero);
//             resolve(hero);
//         }, 2000)
//     });
//     return xPromise;
//  };
//
// getHeroByIdAsync(3).then(res => console.log(`Our hero is ${ res.name }`));

// <> (Form 2)
// const getHeroByIdAsync = (x) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const hero = getHeroById(x);
//             resolve(hero);
//         }, 2000)
//     })
// };
//
// getHeroByIdAsync(2).then(res => console.log(`Our hero is ${ res.name }`));

// <> (Form 3)
// const getHeroByIdAsync = (x) => new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const hero = getHeroById(x);
//         resolve(hero);
//     }, 2000)
// });
//
// getHeroByIdAsync(2).then(res => console.log(`Our hero is ${ res.name }`));

// <> ----------------------------------------------------- .then .catch
export const getHeroByIdAsync = (x) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById(x);
            if(hero) {
                resolve(hero)
            } else {
                // reject('There was a error')
                reject('The hero could not be found!!!')
            }
        }, 250);
    })
};

// getHeroByIdAsync(1)
//     .then(console.log)
//     .catch(console.warn);
