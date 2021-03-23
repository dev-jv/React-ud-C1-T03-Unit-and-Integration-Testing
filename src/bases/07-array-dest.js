// -------------------------------------------- Array Destructuring 
// const character = ['Trubel', 'Nick', 'Monroe'];

// console.log( character[0] );
// console.log( character[1] );
// console.log( character[2] );

// ------------------------------------
// const characters = ['Trubel', 'Nick', 'Monroe'];

// const [ ,,k ] = characters;
// console.log( k );

// ------------------------------------
export const returnArray = () => {
    return ['ABC', 123];
};

// const [ p, q ] = returnArray();
// console.log( p, q );

// ------------------------------------
// const useState = (value) => {
//     return [ value, () => { console.log('Grimm'); }]
// };

// const arr = useState('Trubel');
// console.log(arr);
// arr[1]();

// ------------------------------------
// const useState2 = (value) => {
//     return [ value, () => { console.log('Grimm'); }]
// };

// const [name , setName] = useState2('Trubel');
// console.log(name);
// setName();
