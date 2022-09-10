// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const random = Math.random();
//         setTimeout(() => {
//             if (random < 0.7) {
//                 resolve(`url: ${url}, Request time ${random}`);
//             } else {
//                 reject(`Request Error!, Request time ${random}`);
//             }
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log('OH NO!', err);
//     })



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000))

