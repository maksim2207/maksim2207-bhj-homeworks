const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
const btn = document.getElementsByClassName('poll__answer');


xhr.addEventListener('load', () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        pollTitle.innerHTML = data['data']['title'];
        for (let answer of data['data']['answers']) {
            pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">${answer}</button>`);
        }
        Array.from(btn).forEach((button) => {
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                window.location.reload(true);
            });
        });
    };
})


xhr.open("GET", 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();