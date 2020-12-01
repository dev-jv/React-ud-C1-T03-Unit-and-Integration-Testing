
describe('Pruebas en el archivo dem.test.js', () => {
    test ( 'Deben ser iguales los string', () => {
    
        // 1. inicialización
        const mensaje = 'Hope';
    
        // 2. estímulo
        const mensaje2 = `Hope`;
    
        // 3. Observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
    });
});



