// ----------------------------------- <> Object literal
const persona = { // Object literal
    nombre: 'Jhon',
    apellidos: 'Shankland',
    edad: '45',
};

console.log(persona); // Objeto

console.log(persona.nombre); // Value

console.table(persona); // Tabla de keys

// ----------------------

console.log( { // Definiendo objeto
    objeto1: persona
} );

console.log( { // Iguales
    persona: persona
} );

console.log( { // Simplificando
    persona
} );

console.table( { // Tabla de objetos
    persona
} );

// ---------------------------------------- Reutilizando Objetos

const persona2 = { // Objetos anidados
    nombre: 'Luis',
    apellidos: 'Sanz',
    edad: '20',
    direccion: {
        ciudad: 'New York',
        zip: 54656,
        lat: 45.12233,
        lng: 34.46546,
    }
};

// ---------------------- (1) Asignando un objeto a otro, ...copiamos la referencia al espacio de memoria!
console.log(persona2); // Luis..

const persona25 = persona2;
persona25.nombre = 'Peter';

console.log(persona2); // Peter.. !!
console.log(persona25); // Peter..

// ---------------------- (2) Creamos un nuevo objeto con las keys/values copiadas
const persona26 = { 
    nombre: 'Jhon',
    apellidos: 'Shankland',
    edad: '45',
}; 
persona26.nombre = 'Sam';
console.log(persona26);

// ---------------------- (3) Clonando contenido con spread operator
const persona27 = {...persona};
persona27.nombre = 'Tom';
console.log(persona27);
// ----------------------



