let startTimer = function() {
	let elementTimer = document.getElementById('timer');
	elementTimer.textContent--;

	if (elementTimer.textContent < 0) {
		alert("Вы победили в конкурсе!");
		clearInterval(stopInterval)
	}

}

let stopInterval = setInterval(startTimer, 1000);


 