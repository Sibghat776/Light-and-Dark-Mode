function change() {
    console.log("Chala")
    let bgBlack = document.querySelector(".main").classList.toggle("bgBlack")
    document.querySelector("button").innerHTML = "Light Mode"
    document.querySelector("button").classList.toggle("btnWhite")
    if (!bgBlack) {
        document.querySelector("button").innerHTML = "Dark Mode"
    }
}