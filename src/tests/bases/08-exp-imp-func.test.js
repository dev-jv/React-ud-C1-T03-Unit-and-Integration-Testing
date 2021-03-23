import { getByIdH, getByOwnDC, getByOwnM } from '../../../src/bases/08-exp-imp-func';
import heroes from '../../../src/data/heroes';
import colors from 'colors';

describe('/> Testing in Heroes functions'.bgBlue.white, () => {

    test('Test 1: Should return a hero by id', () => {
        const id = 5;
        const hero = getByIdH(id);
        const heroExp = heroes.find(heroe => heroe.id === id);
        expect(hero).toEqual(heroExp);
    });

    test('Test 2: Should return undefined if the hero does not exist.', () => {
        const id = 6;
        const hero = getByIdH(id);
        expect(hero).toBe(undefined);
    });

    test('Test 3: Should return an array of DC heroes', () => {
        const owner = 'DC';
        const hero = getByOwnDC(owner);
        // console.log(hero);
        const heroExp = heroes.filter(heroe => heroe.owner === owner);
        // console.log(heroExp);
        expect(hero).toEqual(heroExp);
    });

    test('Test 4: Should return an array with Marvel heroes', () => {
        const owner = 'Marvel';
        const kHeroes = getByOwnM(owner).length;
        // console.log(kHeroes);
        expect(kHeroes).toBe(2);
    })

});
