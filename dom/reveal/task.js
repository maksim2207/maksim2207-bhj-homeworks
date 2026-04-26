document.addEventListener('scroll', function() {
	let reveal = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveal.length; i++) {
		let revealTop = reveal[i].getBoundingClientRect().top;
		let revealBottom = reveal[i].getBoundingClientRect().bottom;

		if (revealTop < window.innerHeight && revealBottom > 0) {
			setTimeout(() => {
				reveal[i].classList.add('reveal_active');
			}, 300)
		} 
	}
});

