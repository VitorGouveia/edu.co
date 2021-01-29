if("serviceWorker" in navigator) {
    try {
        navigator.serviceWorker.register("serviceWorker.js")
        console.log("Service Worker registrado com sucesso")
    } catch (err) {
        console.log(err)
    }
}

// const $ = document.querySelector.bind(document)

// html = {
//     modal: $(".modal"),
//     modal_button: $(".modal button") 
// }

// html.modal_button.addEventListener("click", () => {
//     html.modal.classList.toggle("hide")
// })