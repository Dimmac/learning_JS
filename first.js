// const logins = ['qwert', 'uiop', 'asdfg', 'poly4scute', 'hjkl'];
// let message = '';
// console.table(logins);
// const loginToFind = 'poly4scute';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log(login);
//     if (login !== loginToFind) {
//         message = `Пользователь ${loginToFind} не найден.`;
//     } else {
//           message = `Пользователь ${loginToFind} найден.`;  
//     }
// }
// console.log(message);

// const logins = ['qwert', 'uiop', 'asdfg', 'poly4scute', 'hjkl'];
// let message = '';
// console.table(logins);
// const loginToFind = 'poly4scute';
// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('login', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
//           message = `Пользователь ${loginToFind} не найден.`;  
    
// }
// console.log(message);

// const logins = ['qwert', 'uiop', 'asdfg', 'poly4scute', 'hjkl'];
// const loginToFind = 'poly4scute';
// let message = `Пользователь ${loginToFind} не найден.`; 
// console.table(logins);

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('login', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

// const logins = ['qwert', 'uiop', 'asdfg', 'poly4scute', 'hjkl'];
// const loginToFind = 'poly4scute';
// let message = `Пользователь ${loginToFind} не найден.`; 
// console.table(logins);

// for (const login of logins) {
//     console.log('login', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//         if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);

const logins = ['qwert', 'uiop', 'asdfg', 'poly4scute', 'hjkl'];
const loginToFind = 'poly4scute';
// let message = `Пользователь ${loginToFind} не найден.`; 
// console.table(logins);

// for (const login of logins) {
//     console.log('login', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//         if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);
const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
console.log(message)
// console.log(logins.includes(loginToFind));