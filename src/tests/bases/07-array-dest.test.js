import { returnArray } from '../../../src/bases/07-array-dest';
import colors from 'colors';

describe('/> Tests in 07-array-dest.js'.bgBlue.white, () => {

    test('Test 1: Should return a string and number', () => {
        // --- Method 1
        // const arr = returnArray(); // ['ABC', 123];
        // expect( arr ).toEqual(['ABC', 123]);
        // --- Method 2
        const [ letters, numbers ] = returnArray();
        // console.log( typeof numbers );
        expect( letters ).toBe('ABC');
        expect( typeof letters ).toBe( 'string' );

        expect( numbers ).toBe( 123 );
        expect( typeof numbers ).toBe( 'number' );
    })

});
