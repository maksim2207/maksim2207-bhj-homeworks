const btn = document.querySelector('#signin__btn');
const welcome = document.getElementById('welcome');
const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const unAuthBtn = document.querySelector('.unAuth');



if (localStorage.length > 0) {
    welcome.classList.add('welcome_active');
    welcome.querySelector('#user_id').textContent = localStorage.getItem('user_id');
    signin.classList.remove('signin_active');
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 201) {
            if (JSON.parse(xhr.responseText)['success']) {
                localStorage.setItem('user_id', JSON.parse(xhr.responseText)['user_id']);
                welcome.classList.add('welcome_active');
                welcome.querySelector('#user_id').textContent = JSON.parse(xhr.responseText)['user_id']
                signin.classList.remove('signin_active');
                form.reset()
            } else {
                form.reset()
                alert('Неверный логин/пароль');
            }
        };
    })
})

