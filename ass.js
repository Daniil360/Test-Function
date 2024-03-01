

// function a() {
//     const hello = 10;

//     function b() {
//         console.log(hello);
//     }

//     b();
// }


// a()



const data = [
    { id: 10, name: 'Alex', money: 1000 },
    { id: 11, name: 'John', money: 500 },
    { id: 15, name: 'Anna', money: 5500 },
];





// getUserMoney({ id: 11 }, (user) => {
//     // john has $500

//     const str = 'John has $' + user.money;
//     console.log(str);
// }); 

// getUserMoney({ id: 55 }, (user) => {
//     // Anna = 500
//     const str = user.name + ' = ' + user.money;
//     console.log(str);
// }); 



function getUserMoney(userInfo, callback) {
    const id = userInfo.id;

    let result = null;

    for (let i = 0; i < data.length; i++) {
        const user = data[i];

        if ( user && user.id === id) {
            result = user;
        }
        console.log(user);
    } 


    const str = callback(result);

    return str;
}


const alexStr = getUserMoney({ id: 10 }, (user) => {
    // у Alex 1000 р

    const str = 'У ' + user.name + ' ' + user.money + ' P';
    // const str = `У ${user.name} ${user.money} P`;


    return str;
}); 

console.log(alexStr);