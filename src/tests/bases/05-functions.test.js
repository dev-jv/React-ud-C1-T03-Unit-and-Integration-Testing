import '@testing-library/jest-dom'
import { getUser, getActiveUser } from '../../../src/bases/05-functions'
import colors from 'colors';

describe('/> Tests in 05-functions.js'.bgBlue.white, () => {

    test('Test 1: getUser should return an object', () => {
        const userExp = {
            uid: 'Drak01',
            password: 'Godzi01'
        };
        const user = getUser();
        console.log(user);
        expect(user).toEqual(userExp);
    });

    test('Test 2: getActiveUser should return an object, with a parameter such as element', () => {
        const id = 'Deei0';
        const userExp = {
            uid: 'ABC567',
            username: id,
        };
        const userAct = getActiveUser(id);
        expect(userAct).toEqual(userExp);
    });

});
