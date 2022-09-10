// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }

// callTwice(rollDie);
// callTenTimes(rollDie);

// function makeMisteryFunc(){
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function(){
//             console.log('Congrats, I am a good function')
//         } 
//     } else {
//         return function(){
//             alert('You have been infected by a computer virus')
//         }
//     }
// }


// function isBetween(min, max) {
//     return function (num) {
//         return num >= min && num <= max
//     }
// }

// const myMath = {
//     PI: 3.14159,
//     square(num){
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     } 
// }

// const cat = {
//     name: 'Mikaela Gordon',
//     color: 'grey',
//     breed: 'American shorthair',
//     meow(){
//         console.log(`${this.name} says MEOW MEOW!`)
//     }
// }

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return 'EGG';
    }
}