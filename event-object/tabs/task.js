let tabsList = document.querySelectorAll(".tab");
let tabContentList = document.querySelectorAll(".tab__content");

let tabActiveDel = function() {
    tabsList.forEach((tab) => {
        tab.classList.remove("tab_active");
    });
    tabContentList.forEach((tabContent) => {
        tabContent.classList.remove("tab__content_active");
    });
}

let tabActiveAdd = function(index) {
    tabsList[index].classList.add("tab_active");
    tabContentList[index].classList.add("tab__content_active");
}

tabsList.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabActiveDel();
        tabActiveAdd(index);
    });
})