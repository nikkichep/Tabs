let tabs = document.querySelectorAll(".tabs.h3");
let tabsContent = document.querySelectorAll(".tab-content div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabsContent.forEach((content) => {
            content.classList.remove("active");
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabsContent[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});