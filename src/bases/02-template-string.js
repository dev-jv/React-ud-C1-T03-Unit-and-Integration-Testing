// --------------------------- <> Template String > Bactick/Back Quote

const name = 'Harry';
const lastName = 'Potter';

// const nS = name + ' ' + lastName;
// console.log(nS);

const nC = `${name} ${lastName}`;
// console.log(nC);

// const fullName = `
// ${name}
// ${lastName}
// ${1+1}`
// ;
// console.log(fullName);

// export function getGreeting(ka) {
//     // return 'Hi, I´m ' + ka;
//     return 'Hi, I´m ' + ka + '!';
// }

export function getGreeting(k = 'Nero') {
    // return 'Hi, I´m ' + ka;
    return 'Hi, I´m ' + k + '!';
}

// console.log(`Expression: ${getGreeting(name)}`);

// console.log(`Expression: ${getGreeting(nC)}`);
