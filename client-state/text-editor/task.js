const editor = document.getElementById('editor');

editor.addEventListener('input', () => {
  const text = editor.value;
  localStorage.setItem('textContent', text);
});

function restoreFromLocalStorage() {
  const text = localStorage.getItem('textContent');
  if (text !== null) {
    editor.value = text;
  }
}

restoreFromLocalStorage();




