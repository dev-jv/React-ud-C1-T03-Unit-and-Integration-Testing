import '@testing-library/jest-dom';
import {getImage} from '../../../src/bases/11-async-await';
import colors from 'colors';

describe('/> Tests with async-await and fetch'.bgBlue.white, () => {

    test('Test 1: Should return the url of the image', async () => {
        const url = await getImage();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
    })

});
