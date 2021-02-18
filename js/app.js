const inputFile = document.querySelector("#photo")
const generate = document.querySelector("#generate")
const _twibbon = document.querySelector(".twibbon")
const preloader = document.querySelector(".preloader")

preloader.addEventListener('click', preload)

function preload () {
    preloader.style.display = "none"
}

if(screen.width > 600) {
    alert("Lebih baik di buka pada tampilan mobile");
}

inputFile.addEventListener("input", getInput)

function getInput() {
    let file = this.files[0]
    let fileSrc = URL.createObjectURL(file)
    _twibbon.style.backgroundImage = `url(${fileSrc})`
}

generate.addEventListener("click", Generate)

function Generate() {
    domtoimage.toBlob(_twibbon).then(function (blob) {
        window.saveAs(blob, "Twibbon.png");
    });
}
