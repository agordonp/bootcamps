console.log("HELLOOOO!!!...")
setTimeout(() => {
    console.log("...Are you still there?")
}, 3000);
console.log("GOODBYE!!")

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

// clearInterval(id); this is how you stop it on the console.