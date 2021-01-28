if("serviceWorker" in navigator) {
    try {
        navigator.serviceWorker.register("serviceWorker.js")
        console.log("Service Worker registrado com sucesso")
    } catch (err) {
        console.log(err)
    }
}