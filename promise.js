
// ------1

// return((auth) => {
//     getUserInfo((user) => {
//         getUserGames((userGames) => {
//             getSomething('...');
//         })
//     })
// })



// -------2

// run((auth) => {
//     getUserInfo((user) => {
//         getUserGames((userGames) => {
//             getSomething('...');
//         })
//     })
// })


// run()
//     .then(getUserInfo)
//     .then(getUserGames)
//     .then(getSomething);






// -------3


function fethUserInfo(callback) {
    setTimeout(() => {
        // fetch
        const data = { id: 1, name: 'Alex'  };
        callback(data);
    }, 1000);
}

function fetchUserGames(id, callback) {
    
}

function run() {
    fethUserInfo((userInfo) => {
        console.log(userInfo);
    });
}


run();