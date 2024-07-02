const scrollBtn = document.querySelector(".scrollToTopBtn");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
        scrollBtn.style.opacity = "1";
        scrollBtn.style.marginRight = "0";
        scrollBtn.style.marginLeft = "0";
    } else {
        scrollBtn.style.visibility = "hidden";
        scrollBtn.style.opacity = "0";
        scrollBtn.style.marginRight = "-200px";
        scrollBtn.style.marginLeft = "-200px";
    }
};

document.addEventListener("scroll", () => {
    btnVisibility();
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});