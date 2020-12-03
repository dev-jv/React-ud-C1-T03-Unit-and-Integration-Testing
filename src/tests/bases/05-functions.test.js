import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../bases/05-functions'

describe('Pruebas en 05-functions.js', () => {
    test('Test 1: getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'Drak01',
            password: 'Godzi01'
        }
        const user = getUser()
        console.log(user);
        expect(user).toEqual(userTest);
    })

    test('Test 2: getUsuarioActivo debe retornar un objeto, con un parámetro como elemento ', () => {
        const n = 'Deei0';
        const usNameTest = {
            uid: 'ABC567',
            username: n,
        }
        const usName = getUsuarioActivo(n);
        expect(usName).toEqual(usNameTest);
    })
})



