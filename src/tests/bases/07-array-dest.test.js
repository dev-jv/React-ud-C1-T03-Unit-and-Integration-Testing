import { retornarArreglo } from '../../bases/07-array-dest'


describe('Pruebas en 07-array-dest.js', () => {
    test('Debe retornar un string y un número', () => {

        // const arr = retornarArreglo(); // ['ABC', 123];
        // expect( arr ).toEqual(['ABC', 123]);

        const [ letras, numeros ] = retornarArreglo();

        console.log( typeof numeros );

        expect( letras ).toBe('ABC')
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    })
})



