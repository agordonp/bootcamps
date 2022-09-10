
const button = document.querySelector('button');
const input = document.querySelector('#entry');


button.addEventListener('click', function (e) {
    e.preventDefault();

    const dogList = document.querySelector('#dogs');
    const catList = document.querySelector('#cats');
    const li = document.createElement('li');
    const kittyCheckbox = document.querySelector('#kitty');
    const doggyCheckbox = document.querySelector('#doggy');

    if (kittyCheckbox.checked && input.value !== '') {
        li.innerText = input.value;
        catList.append(li);
    } else if (doggyCheckbox.checked && input.value !== '') {
        li.innerText = input.value;
        dogList.append(li);
    } else if (input.value.length === 0) {
        alert('You need to put an entry💭! ');
    } else {
        alert('You have to select a pet!😺🐶');
    }
})