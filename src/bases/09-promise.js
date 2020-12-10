import { heroes } from '../data/heroes'

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

// <> -------------------------------------------------- Promise .then
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         resolve();
//     }, 2000)
// })

// promesa.then( () => {
//     console.log('Then de la promesa');
// })

// <> -------------------------------------------------- Promise .catch
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         // console.log('2 segundos después');
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         // resolve(heroe)        
//         reject(heroe);
//     }, 2000)
// })

// promesa.then( (resultado) => {
//     console.log(`Nuestro heroe es ${resultado.name}`);
// }).catch(err => console.error(err))

 // <> ----------------------------------------------------- Promise ...Forms

 // <> (Forma 1)
//  const getHeroeByIdAsync = (x) => {
//     const promesa = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             // console.log('2 segundos después');
//             const heroe = getHeroeById(x);
//             // console.log(heroe);
//             // resolve(heroe)        
//             resolve(heroe);
//         }, 2000)
//     })

//     return promesa;
//  }

// getHeroeByIdAsync(3).then(res => console.log(`Nuestro heroe es ${ res.name }`))

// <> (Forma 2)
// const getHeroeByIdAsync = (x) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const heroe = getHeroeById(x);     
//             resolve(heroe);
//         }, 2000)
//     })
// }

// getHeroeByIdAsync(2).then(res => console.log(`Nuestro heroe es ${ res.name }`))

// <> (Forma 3)
// const getHeroeByIdAsync = (x) => new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroeById(x);  
//         resolve(heroe);
//     }, 2000)
// })

// getHeroeByIdAsync(2).then(res => console.log(`Nuestro heroe es ${ res.name }`))

 // <> ----------------------------------------------------- .then .catch
export const getHeroeByIdAsync = (x) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(x);   
            if(heroe) {
                resolve(heroe)
            } else {
                reject('No se pudo encontrar el héroe!!!')
            }
        }, 2000)
    })
}

    // getHeroeByIdAsync(1)
    //     .then(console.log)
    //     .catch(console.warn)



