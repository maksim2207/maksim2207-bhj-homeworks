let hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        if (element.nextElementSibling === null || !element.nextElementSibling.classList.contains('tooltip')) {
            element.insertAdjacentHTML("afterend", '<div class="tooltip">Текст подсказки</div>');
            element.nextElementSibling.style.position = "absolute";
            element.nextElementSibling.style.transform = `translate(${element.getBoundingClientRect().left}px)`;
            element.nextElementSibling.textContent = element.getAttribute("title");
            element.nextElementSibling.classList.add("tooltip_active")
        } else {    
            element.nextElementSibling.remove();        
        };
    });
    element.addEventListener("blur", (e) => {
        e.preventDefault();
        if (element.nextElementSibling.classList.contains("tooltip")) {
        element.nextElementSibling.remove();
        };
    })
})