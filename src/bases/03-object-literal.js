// ----------------------------------- <> Object literal
const person = { // Object literal
    name: 'Jhon',
    lastName: 'Shankland',
    age: '45',
};

console.log(person); // Object

console.log(person.name); // Value

console.table(person); // Key table

// ----------------------
console.log( { // Defining object
    object1: person
} );

console.log( { // Equals
    person: person
} );

console.log( { // Simplifying
    person
} );

console.table( { // Object table
    person
} );

// ----------------------------------------  Reusing Objects
const person2 = { // Nested objects
    name: 'Luis',
    lastName: 'Sanz',
    age: '20',
    direccion: {
        city: 'New York',
        zip: 54656,
        lat: 45.12233,
        lng: 34.46546,
    }
};

// ---------------------- (1) By assigning one object to another, ...we copy the reference to the memory space!
console.log(person2); // Luis..

const person25 = person2;
person25.name = 'Peter';

console.log(person2); // Peter.. !!
console.log(person25); // Peter..

// ---------------------- (2)  Create a new object with the copied keys/values
const person26 = {
    name: 'Jhon',
    lastName: 'Shankland',
    age: '45',
};
person26.name = 'Sam';
console.log(person26);

// ---------------------- (3) Cloning content with spread operator
const person27 = {...person};
person27.name = 'Tom';
console.log(person27);
