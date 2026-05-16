const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');


if (document.cookie != 'modal=closed') {
    modal.classList.add('modal_active');
}


modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    if (document.cookie != 'modal=closed') {
        document.cookie = 'modal=closed';
        console.log(document.cookie);
    } 
})