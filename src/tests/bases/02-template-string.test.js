import '@testing-library/jest-dom'
import { getGreeting } from '../../../src/bases/02-template-string'
import colors from 'colors';

describe('/> Tests in 02-template-string.js'.bgBlue.white, () => {

    test('Test 1: getGreeting, with parameters', () => {
        const name = 'Nevi';
        const gree = getGreeting(name);
        console.log(gree.blue);
        expect(gree).toBe('Hi, I´m ' + name + '!');
    });

    test('Test 2: getGreeting, with default parameters', (name = 'Nero') => {
        const gree = getGreeting();
        console.log(gree.blue);
        expect(gree).toBe('Hi, I´m ' + name + '!');
    });

});
