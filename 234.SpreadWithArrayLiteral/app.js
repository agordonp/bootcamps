
const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];

Math.max(...nums) //53456
Math.max(nums) //NaN

const cats = ['Mikaela', 'Oliver', 'Cleo'];
const dogs = ['Scooter', 'Ronaldo', 'Amiel'];

const allPets = [...cats, ...dogs];

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, Family: 'Caninae' };

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: '123456',
    username: 'tfunke'
}

const newUser = { dataFromForm, id: 2345, isAdmin: false }
const newUser2 = { ...dataFromForm, id: 2345, isAdmin: false }
