const resetButton = document.querySelector('#resetButton');
const playTo = document.querySelector('#playto');

let winningScore = parseInt(playTo.value);
let selectorIndex = 0;
let p1Container = document.querySelector('#wol1');
let p2Container = document.querySelector('#wol2');

//Objetos para poder acceder a el y a cada atributo del mismo
const p1 = {
    name: document.querySelector('#p1Name'),
    inputName: document.querySelector('#p1InputName'),
    button: document.querySelector('#p1Button'),
    scoreDisplay: document.querySelector('#displayP1'),
    score: 0
}

const p2 = {
    name: document.querySelector('#p2Name'),
    inputName: document.querySelector('#p2InputName'),
    button: document.querySelector('#p2Button'),
    scoreDisplay: document.querySelector('#displayP2'),
    score: 0
}

p1InputName.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        names(p1);
    }
})

p2InputName.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        names(p2);
    }
})

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
    winBy2(p1, p2);
    winnerLosser(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
    winBy2(p2, p1);
    winnerLosser(p2, p1);
})

resetButton.addEventListener('click', function () {
    winningScore = parseInt(playTo.value);
    reset();
})

playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

//Funcion para cambiar los nombres
function names(player) {
    player.name.innerText = player.inputName.value;
    player.inputName.value = '';
}

//Funcion para reiniciar el juego
function reset() {
    for (let p of [p1, p2]) {
        p.scoreDisplay.innerText = 0;
        p.score = 0;
        p.button.disabled = false;
        p.scoreDisplay.classList.remove("has-text-success", "has-text-danger");
    }

    for (let i = 0; i <= 6; i++) {
        playTo[i].value = 5 + i;
        playTo[i].innerText = 5 + i;
    }
    playTo.classList.remove("overtime");
    p1Container.remove();
    p2Container.remove();
    p1Container.innerText = '';
    p2Container.innerText = '';
}

//Funcion para ambos jugadores
function updateScores(player, opponent) {
    player.score++;
    player.scoreDisplay.innerText = player.score;
    if (player.score === winningScore) {
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.scoreDisplay.classList.add("has-text-success");
        opponent.scoreDisplay.classList.add("has-text-danger");
    }
}

//Funcion de ganar por 2 puntos
function winBy2(player, opponent) {
    if (player.score === opponent.score && player.score === winningScore - 1) {
        winningScore++;
        playTo.classList.add("overtime");
        playTo.selectedOptions[0].innerText = `Tie BREAK to ${winningScore}`;
    }
}

/*Funcionalidad para que el jugador que gane, la pantalla se divida 3/4 a su favor y diga winner
y en el otro loser. Habria que eliminar la columna del medio y agregar las clases de Bulma a la columna ganadora 
y la otra adopta el tamano por defecto.
*/


//Prueba 2 de la funcion winnerLosser
function winnerLosser(player, opponent) {
    if (player.score === winningScore) {
        //Vamos a crear los elementos que van a representar las palabras Winner-Loser en el juego
        const winner = document.createElement('h3');
        const loser = document.createElement('h3');

        //Agregando informacion de los H3 y agregando los mismos a los divs
        winner.classList.add('subtitle', 'is-3');
        winner.innerText = 'Winner';
        loser.classList.add('subtitle', 'is-3');
        loser.innerText = 'Loser';
        p1Container.appendChild(winner);
        p2Container.appendChild(loser);

        player.name.appendChild(p1Container);
        opponent.name.appendChild(p2Container);
    } else if (opponent.score > player.score && opponent.score === winningScore) {
        opponent.name.appendChild(p1Container);
        player.name.appendChild(p2Container);
    }
}


