import {getHeroByIdAsync} from '../../../src/bases/09-promise';
import heroes from '../../../src/data/heroes';
import colors from 'colors';

describe('/> Tests with promises'.bgBlue.white, () => {

    test('Test 1: getheroeByIdAsync should return a Hero async', (done) => {
         const id = 1;
         getHeroByIdAsync(id)
            .then(hero => {
                expect(hero).toBe(heroes[0]);
                done();
            });
    });

    test('Test 2: Should get an error if the Hero does not exist.', (done) => {
        const id = 6;
        getHeroByIdAsync(id)
            .catch(error => {
                expect(error).toBe('The hero could not be found!!!');
                done();
            })
    });

});
