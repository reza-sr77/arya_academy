const modalBack = document.querySelector("#modalBack");
const modalContainer = document.querySelector("#modalContainer");
const modalBox = document.querySelector("#modalBox");


const openModal = () => {
    modalBack.style.visibility = "visible"
    modalBack.style.opacity = "0.3"
    modalContainer.style.visibility = "visible"
    modalContainer.style.opacity = "1"
    modalBox.style.marginTop = "2rem"
}

const closeModal = () => {
    modalBack.style.visibility = "hidden"
    modalBack.style.opacity = "0"
    modalContainer.style.visibility = "hidden"
    modalContainer.style.opacity = "0"
    modalBox.style.marginTop = "0"
}