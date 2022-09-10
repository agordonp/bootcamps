function newColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button')


function changeColor() {
    this.style.backgroundColor = newColor();
    this.style.color = newColor();
    this.style.transition = '0.5s';
}
for (let button of buttons) {
    button.addEventListener('click', changeColor)
}
