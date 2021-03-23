// ----------------------------- <> Functions

// ----------------------- 
// function greeting(x) {
//     return `Hi ${x}`;
// }
// greeting = 30;
// // console.log(greeting('Sam'));
// console.log(greeting);

// ------
// const greeting = function(x) {
//     return `Hi ${x}`;
// };
// console.log(greeting('Sam'));

// ------
// const greeting2 = (x) => `Hi ${x}`;
// console.log(greeting2('Dean'));

// ------
export const getUser = () => ({ // ({..})
    uid: 'Drak01',
    password: 'Godzi01'
});

// const user = getUser();
// console.log(user);

// ------
export const getActiveUser = name => ({
    uid: 'ABC567',
    username: name,
});

// const activeUser = getActiveUser('Castiel');
// console.log(activeUser);
