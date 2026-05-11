let form = document.forms[0];
let input = document.querySelector("#task__input");
let tasksList = document.querySelector("#tasks__list");
let taskRemove = document.getElementsByClassName("task__remove");
let tasks = document.getElementsByClassName("task");



input.addEventListener("change", () => {
    tasksList.insertAdjacentHTML("beforeend", `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`);
    tasksList.lastChild.getElementsByClassName("task__remove")[0].addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
    })   
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset()
})