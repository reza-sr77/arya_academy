const scrollHeader = document.querySelector(".fixedHeader");
const hight = document.querySelector(".headerHight");

const headerFixed = () => {
    if (window.scrollY > 64) {
        scrollHeader.classList.add('fixedHeaderBox')
        scrollHeader.classList.remove('exitEffect')

        hight.classList.remove('h-20')
        hight.classList.add('h-16')

    } else {
        scrollHeader.classList.add('exitEffect')
        scrollHeader.classList.remove('fixedHeaderBox')

        hight.classList.remove('h-16')
        hight.classList.add('h-20')
    }
};

document.addEventListener("scroll", () => {
    headerFixed();
});

// scrollBtn.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });