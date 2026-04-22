let btn = document.querySelector('.dropdown');
let elementValue = document.querySelector('.dropdown__value');
let elementlist = document.querySelector('.dropdown__list');
console.log(elementlist.classList);


btn.addEventListener('click', () => {
	elementlist.classList.toggle('dropdown__list_active')
});

let arraylink = Array.from(document.querySelectorAll('.dropdown__item'));

arraylink.forEach((element) => {
	element.addEventListener('click', (e) => {
		e.preventDefault();
		elementValue.textContent = element.textContent;
	});
}) 
