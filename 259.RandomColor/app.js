const btn = document.querySelector('#color');
const h1 = document.querySelector('h1');


function newColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if (r < 150 && g < 150 && b < 150) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = newColor();
    h1.innerText = newColor();

})

