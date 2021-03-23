// --------------------------------------------------- Object Destructuring

// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
// };
//
// console.log(person.name);
// console.log(person.age);
// console.log(person.key);

// ---------------------------------------------------
// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
// };
//
// const {age, name, key} = person;
//
// console.log(name);
// console.log(age);
// console.log(key);

// ---------------------------------------------------
// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
// };
//
// const returnPerson = ( user ) => {
//     console.log(user);
// };
//
// returnPerson( person );

// ---------------------------------------------------
// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
// };
//
// const returnPerson = ( {name, key} ) => {
//     console.log(name, key);
// };
//
// returnPerson( person );

// ---------------------------------------------------
// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
//     status: 'Active',
// };
//
// const returnPerson = ( {name, key, status ='Inactive'} ) => {
//     console.log(name, key, status);
// };
//
// returnPerson( person );

// ---------------------------------------------------
// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
//     // status: 'Active',
// };
//
// const useContext = ( {name, key, age, status ='Inactive'} ) => {
//     // console.log(name, key, status);
//     return {
//         keyName: key,
//         ans: age,
//     }
// };
//
// const {keyName, ans} = useContext( person );
// // const {keyName, ans} = hunter;
// console.log(keyName, ans);

// ---------------------------------------------------
// const person = {
//     name: 'Nick',
//     age: 30,
//     key: 'Grimm',
//     // status: 'Active',
// };
//
// const useContext = ( {name, key, age, status ='Inactive'} ) => {
//     // console.log(name, key, status);
//     return {
//         keyName: key,
//         ans: age,
//         sts:status,
//         latlng: {
//             lat: 14.1232,
//             lng: -12.32
//         }
//     }
// };
//
// const {sts, keyName, ans, latlng} = useContext( person );
// // const {keyName, ans} = hunter;
// console.log(keyName, ans, sts);
// console.log(latlng);

// ---------------------------------------------------
const person = {
    name: 'Nick',
    age: 30,
    key: 'Grimm',
    // status: 'Active',
};

const useContext = ( {name, key, age, status ='Inactive'} ) => {
    // console.log(name, key, status);
    return {
        keyName: key,
        ans: age,
        sts:status,
        latlng: {
            lat: 14.1232,
            lng: -12.32
        }
    }
};

const {sts, keyName, ans, latlng:{lat, lng}} = useContext( person );
// const {keyName, ans} = hunter;
console.log(keyName, ans, sts);
console.log(lat, lng);
