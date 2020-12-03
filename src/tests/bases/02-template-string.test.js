import '@testing-library/jest-dom'
import { getSaludo } from '../../bases/02-template-string.js'

describe('Pruebas en 02-template-string.js', () => {
    
    test('Test 1: getSaludo, con parámetros', () => {
        const nombre = 'Nevile';
        const saludo = getSaludo(nombre);
        console.log(saludo);
        expect(saludo).toBe('Bienvenido ' + nombre + '!');
    })

    test('Test 2: getSaludo, con parámetros por defecto ', (nombre = 'Nero') => {
        const saludo = getSaludo();
        console.log(saludo);
        expect(saludo).toBe('Bienvenido ' + nombre + '!');
    })
})



