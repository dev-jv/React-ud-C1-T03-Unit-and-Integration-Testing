import {getHeroeByIdAsync} from '../../bases/09-promise';
import heroes from '../../data/heroes';

describe('Pruebas con Promesas', () => {
    test('getheroeByIdAsync debe retornar un Héroe async', (done) => {
         const id = 1;
         getHeroeByIdAsync(id)
            .then(  heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            });
        
    });
    test('Debe de obtener un error si el heroe no existe', (done) => {
        const id = 6;
        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe!!!');
                done();
            })
    });
    
});



