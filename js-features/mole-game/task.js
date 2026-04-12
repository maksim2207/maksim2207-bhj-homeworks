let score = 0;
let misses = 0;
const deadDispl = document.getElementById('dead');
const lostDispl = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

function updateScore() {
	deadDispl.textContent = score;
	lostDispl.textContent = misses;
}

function playGame(element) {
	if (element.target.classList.contains('hole_has-mole')) {
		deadDispl.textContent = ++score;
	} else {
		lostDispl.textContent = ++misses;
	}

	if (score === 10) {
		alert('Победа! Вы победили кротов!');
		resetGame()
	} else if (misses === 5) {
		alert('Игра окончена! Вы проиграли.');
		resetGame()
	}
}


function resetGame() {
	score = 0;
	misses = 0;
	updateScore()
}

holes.forEach((hole, index) => {
	hole.addEventListener('click', playGame);
});
 