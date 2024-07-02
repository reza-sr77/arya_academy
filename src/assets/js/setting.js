//theme
function darkTheme() {
    document.body.classList.add('dark');
    window.localStorage.setItem('theme', 'dark');
}

function lightTheme() {
    document.body.classList.remove('dark');
    window.localStorage.setItem('theme', 'light');
}

if (window.localStorage.getItem('theme') == "dark") {
    document.body.classList.add('dark');
} else if (window.localStorage.getItem('theme') == "light") {
    document.body.classList.remove('dark');
} else {
    document.body.classList.remove('dark');
    window.localStorage.setItem('theme', 'light');
}


//direction
function ltrDir() {
    document.body.dir = "ltr";
    window.localStorage.setItem('dir', 'ltr');
    document.getElementById('menuMobileDir').style.direction = "ltr"
    document.getElementById('menuHeaderMobileDir').style.direction = "ltr"

}

function rtlDir() {
    document.body.dir = "rtl";
    window.localStorage.setItem('dir', 'rtl');
    document.getElementById('menuMobileDir').style.direction = "rtl"
    document.getElementById('menuHeaderMobileDir').style.direction = "rtl"

}

if (window.localStorage.getItem('dir') == "ltr") {
    document.body.dir = "ltr";
    document.getElementById('menuMobileDir').style.direction = "ltr"
    document.getElementById('menuHeaderMobileDir').style.direction = "ltr"
} else if (window.localStorage.getItem('dir') == "rtl") {
    document.body.dir = "rtl";
    document.getElementById('menuMobileDir').style.direction = "rtl"
    document.getElementById('menuHeaderMobileDir').style.direction = "rtl"
} else {
    document.body.dir = "rtl";
    window.localStorage.setItem('dir', 'rtl');
    document.getElementById('menuMobileDir').style.direction = "rtl"
    document.getElementById('menuHeaderMobileDir').style.direction = "rtl"
}

//language
function chnageLanguage(value) {
    if (value == "dari") {
        window.localStorage.setItem('lang', 'dari');
        document.getElementById('currentLangImg').src = "./../assets/img/landing/language/afghanistan.png";
        document.getElementById('currentLang').innerHTML = "دری"
        rtlDir()

    } else if (value == "pashto") {
        window.localStorage.setItem('lang', 'pashto');
        document.getElementById('currentLangImg').src = "./../assets/img/landing/language/afghanistan.png";
        document.getElementById('currentLang').innerHTML = "پشتو"
        document.getElementsByTagName("p").style.display="none"
        rtlDir()

    } else if (value == "en") {
        window.localStorage.setItem('lang', 'en');
        document.getElementById('currentLangImg').src = "./../assets/img/landing/language/united-states.png";
        document.getElementById('currentLang').innerHTML = "English"
        ltrDir()
    }
}


if (window.localStorage.getItem('lang') == "dari") {
    document.getElementById('currentLangImg').src = "./../assets/img/landing/language/afghanistan.png";
    document.getElementById('currentLang').innerHTML = "دری"
    rtlDir()
} else if (window.localStorage.getItem('lang') == "pashto") {
    document.getElementById('currentLangImg').src = "./../assets/img/landing/language/afghanistan.png";
    document.getElementById('currentLang').innerHTML = "پشتو"
    rtlDir()
} else if (window.localStorage.getItem('lang') == "en") {
    document.getElementById('currentLangImg').src = "./../assets/img/landing/language/united-states.png";
    document.getElementById('currentLang').innerHTML = "English"
    ltrDir()
} else {
    document.getElementById('currentLangImg').src = "./../assets/img/landing/language/afghanistan.png";
    document.getElementById('currentLang').innerHTML = "دری"
    window.localStorage.setItem('lang', 'dari');
    rtlDir()
}