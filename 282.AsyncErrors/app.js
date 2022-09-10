const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout:(')
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    })
}

async function makeTwoRequests() {
    try {
        const data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        const data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch (e) {
        console.log('CAUGHT AN ERROR!')
        console.log('The error is:', e)
    }
}