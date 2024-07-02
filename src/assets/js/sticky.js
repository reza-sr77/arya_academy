const fixedBtn = document.querySelector(".fixedNavBars");

const navFixed = () => {
    if (screen.width > 1500) {
        if (window.scrollY > 526) {
            fixedBtn.style.position = "fixed";
            fixedBtn.style.right = "50%";
            fixedBtn.style.top = "64px";
            fixedBtn.style.marginTop = "0";
            fixedBtn.style.marginRight = "-750px";
        } else {
            fixedBtn.style.position = "relative";
            fixedBtn.style.right = "57px";
            fixedBtn.style.top = "inherit";
            fixedBtn.style.marginTop = "10px";
            fixedBtn.style.marginRight = "auto";
        }
    }
    else if (screen.width > 767) {
        if (window.scrollY > 526) {
            fixedBtn.style.position = "fixed";
            fixedBtn.style.right = "0";
            fixedBtn.style.top = "64px";
            fixedBtn.style.marginTop = "0";
            fixedBtn.style.marginRight = "0";

        } else {
            fixedBtn.style.position = "relative";
            fixedBtn.style.right = "inherit";
            fixedBtn.style.top = "inherit";
            fixedBtn.style.marginTop = "10px";
            fixedBtn.style.marginRight = "0";
        }
    }
    else {
        if (window.scrollY > 495) {
            fixedBtn.style.position = "fixed";
            fixedBtn.style.right = "0";
            fixedBtn.style.top = "64px";
            fixedBtn.style.marginTop = "0";
        } else {
            fixedBtn.style.position = "relative";
            fixedBtn.style.right = "inherit";
            fixedBtn.style.top = "inherit";
            fixedBtn.style.marginTop = "10px";
        }
    }
};

document.addEventListener("scroll", () => {
    navFixed();
});

addEventListener("resize", () => {
    navFixed();
});
