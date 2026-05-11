const xhr = new XMLHttpRequest();
const form = document.getElementById('form');
const progress = document.getElementById( 'progress' );


const changeProgress = function(element) {
	progress.value = element.loaded / element.total
}

xhr.upload.addEventListener('progress', (el)=>{
    console.log('Отправлено');
	changeProgress(el);
	});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})
