// const sign = async () => {
//     throw "OH NO, PROBLEM"
//     return 'LA LA LA LA'
// }

// sign()
//     .then((data) => {
//         console.log("PROMISE RESOLVED WITH: ", data)
//     })
//     .catch((err) => {
//         console.log("OH NO, PROMISE REJECTED!")
//         console.log(err)
//     })

const login = async (username, password) => {
    if (!username || !password) {
        throw 'Missin Credentials';
    } else if (password === 'corgifeetarecute') {
        return 'WELCOME!';
    } else {
        throw 'Invalid Password';
    }
}

login('Alexisgg', 'corgifeetarecutse')
    .then((data) => {
        console.log(data);
    })