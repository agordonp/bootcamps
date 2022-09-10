//Creacion de objetos o variables
const totalScoreP1 = document.querySelector('#player1'); //Puntuacion jugador #1
const totalScoreP2 = document.querySelector('#player2'); //Puntuacion jugador #2
const addPlayer1 = document.querySelector('#addPlayer1'); //Agrega +1 al score de jugador #1
const addPlayer2 = document.querySelector('#addPlayer2'); //Agrega +1 al score de jugador #2
const resetButton = document.querySelector('#reset'); //Boton que reinicia el juego
const winningScoreSelect = document.querySelector('#playto'); //Select de a cuantos puntos sera el juego

//Inicializar 
let scoreP1 = 0;
let scoreP2 = 0;
let win = 3;
let isGameOver = false;

addPlayer1.addEventListener('click', function () {
    if (!isGameOver) {
        scoreP1 += 1;
        if (scoreP1 === win) {
            isGameOver = true;
            totalScoreP1.style.color = ('green');
            totalScoreP2.style.color = ('red');
            addPlayer1.disabled = true;
            addPlayer2.disabled = true;
        }
        totalScoreP1.textContent = scoreP1;
    }
})

addPlayer2.addEventListener('click', function () {
    if (!isGameOver) {
        scoreP2 += 1;
        if (scoreP2 === win) {
            isGameOver = true;
            totalScoreP2.style.color = ('green');
            totalScoreP1.style.color = ('red');
            addPlayer1.disabled = true;
            addPlayer2.disabled = true;
        }
        totalScoreP2.textContent = scoreP2;
    }
})

winningScoreSelect.addEventListener('change', function () {
    win = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);

function reset() {
    if (!isGameOver) {
        isGameOver = false;
        scoreP1 = 0;
        scoreP2 = 0;
        totalScoreP1.textContent = 0;
        totalScoreP2.textContent = 0;
    } else {
        isGameOver = false;
        scoreP1 = 0;
        scoreP2 = 0;
        totalScoreP1.textContent = 0;
        totalScoreP2.textContent = 0;
        addPlayer1.disabled = false;
        addPlayer2.disabled = false;
        totalScoreP2.style.color = ('black');
        totalScoreP1.style.color = ('black');
    }
}


/* MY CODE - Habia un error al hacerlo asi y era que al score ser = que win, no se aplicaba el disable a
los botones ni las clases a los totalScores, entonces cuando el P1 llegaba al win score, el 2 podia llegar tambien
Y luego era que se aplicaban los estilos y el disabled.

addPlayer2.addEventListener('click', function () {
    if (scoreP2 < win) {
        scoreP2 += 1;
        totalScoreP2.textContent = scoreP2;
    } else if (scoreP2 === win) {
        totalScoreP2.style.color = ('green');
        totalScoreP1.style.color = ('red');
        addPlayer1.disabled = true;
        addPlayer2.disabled = true;
    }
}) */