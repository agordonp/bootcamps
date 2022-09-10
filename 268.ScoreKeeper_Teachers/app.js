const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;
let totalPoints = (p1.score + p2.score) / 2;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        if (p1.score === p2.score && p1.score === winningScore - 1) {
            winningScore++;
            winningScoreSelect.selectedOptions[0].innerText = `Tie BREAK to ${winningScore}`;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', function () {
    reset(winningScoreSelect.selectedIndex);
})

function reset(index) {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    for (let i = 0; i <= 6; i++) {
        winningScoreSelect[i].value = 5 + i;
        winningScoreSelect[i].innerText = 5 + i;
    }
    winningScoreSelect.selectedIndex = index;
    winningScore = parseInt(winningScoreSelect.value);
}

