const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You clicke me!")
}

const btn3 = document.querySelector("#v3");
btn3.addEventListener('click', function () {
    alert('clicked!');
})

function twist() {
    console.log("TWIST");
}

function shout() {
    console.log("SHOUT");
}

/*Ejemplo de la segunda manera
No imprime las dos funciones de esta forma, solo imprime la ultima, sobreescribe la primera! 
*/
const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

//Pero usando addEventListener...

tasButton.addEventListener('click', twist);
tasButton.addEventListener('click', shout);
