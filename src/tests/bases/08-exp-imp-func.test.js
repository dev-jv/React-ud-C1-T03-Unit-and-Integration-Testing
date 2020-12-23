import { getByIdH, getByOwnDC, getByOwnM } from '../../bases/08-exp-imp-func';

import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un heroe por id', () => {
        const id = 5;
        const heroId = getByIdH(id)
        const heroIdTest = heroes.find(heroe => heroe.id === id)
        expect(heroId).toEqual(heroIdTest);
    });
    test('Debe retornar undefined si el heroe no existe', () => {
        const id = 6;
        const heroId = getByIdH(id)
        expect(heroId).toBe(undefined);
    });
    test('Debe retornar un array con los heroes de DC', () => {
        const owner = 'DC';
        const heroDC = getByOwnDC(owner);
        // console.log(heroDC);
        const heroDCTest = heroes.filter(heroe => heroe.owner === owner);
        // console.log(heroDCTest);
        expect(heroDC).toEqual(heroDCTest);
    });
    test('Debe retornar un array con los heroes de Marvel', () => {
        const owner = 'Marvel'; 
        const heroMar = getByOwnM(owner).length;
        // console.log(heroMar);
        expect(heroMar).toBe(2);
    })
});



