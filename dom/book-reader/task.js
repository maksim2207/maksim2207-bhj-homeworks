let arrFontSizes = Array.from(document.querySelectorAll('.font-size'));
let FontSizeActive = document.querySelector('.font-size_active');
let books = document.querySelector('.book');


arrFontSizes.forEach(e => {
  e.addEventListener('click', function(event) {
    event.preventDefault();
    FontSizeActive.classList.remove('font-size_active');
    FontSizeActive = e;
    FontSizeActive.classList.add('font-size_active');
    
    books.classList.remove('book_fs-small', 'book_fs-big');

    let size = event.target.dataset.size;

    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
  });
});

