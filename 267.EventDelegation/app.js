// // My Code
// const username = document.querySelector('#username');
// const tweet = document.querySelector('#tweet');
// const button = document.querySelector('#button');
// const list = document.querySelector('ul');

// button.addEventListener('click', function () {
//     const el = document.createElement('li');
//     const bTag = document.createElement('b');

//     bTag.append(username.value);
//     el.append(bTag);
//     el.append(` - ${tweet.value}`);
//     list.append(el);

//     username.value = '';
//     tweet.value = '';

// })

//Teacher's Code    

const tweetForm = document.querySelector('#tweetForm'); //form
const tweetsContainer = document.querySelector('#tweets'); //ul

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username; //se podria haber tomado el elemento con un id?
    const tweetInput = tweetForm.elements.tweet; // se podria haber tomado el elemento con un id?
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})